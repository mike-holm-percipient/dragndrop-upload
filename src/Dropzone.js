import React, { useState } from 'react';
import cn from 'classnames';

const scanDirectory = dir => new Promise((resolve, reject) => {
  const reader = dir.createReader();
  reader.readEntries(entries => { // needs called multiple times
    Promise.all(entries.map(scanEntry)).then(resolve); // recursion probably needs capped
  }, reject);
});

const scanEntry = entry => new Promise((resolve, reject) => {
  const {name} = entry;
  const file = {name};

  if (entry.isDirectory) {
    scanDirectory(entry)
      .then(files => resolve({ ...file, files }))
      .catch(reject);
  } else {
    resolve(file);
  }
});

const Dropzone = ({onDrop}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={cn(
        'dropzone',
        hovered && 'dropzone-active'
      )}
      onDragOver={e => {
        e.preventDefault();
      }}
      onDragEnter={e => {
        e.preventDefault();
        setHovered(true);
      }}
      onDragLeave={e => {
        e.preventDefault();
        setHovered(false);
      }}
      onDrop={async e => {
        setHovered(false);
        console.log('file(s) dropped');
        e.preventDefault();
        e.stopPropagation();

        const {items, files} = e.dataTransfer;
        const data = [];

        if (items) {
          for (const item of items) {
            const entry = item.webkitGetAsEntry();
            data.push(await scanEntry(entry));
          }
        } else {
          for (const file of files) {
            console.log('file', file);
          }
        }

        onDrop(data);
      }}>
      drop files and folders
    </div>
  );
};

export default Dropzone;
