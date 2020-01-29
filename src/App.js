import React, {useState} from 'react';
import cn from 'classnames';
import FileUploadSection from './FileUploadSection';
import FolderUploadSection from './FolderUploadSection';
import Dropzone from './Dropzone';
import './App.css';

const File = ({className, ...restProps}) => (
  <li
    className={cn('File-root', className)}
    {...restProps}
  />
);

const FileList = ({className, data, ...restProps}) => (
  <ul
    className={cn('FileList-root', className)}
    {...restProps}
  >
    {data.map(({name, files}) => {
      if (files) console.log(name, files.length);
      return files ? (
        <File key={name}>
          {name}
          <FileList data={files} />
        </File>
      ) : (
        <File key={name}>{name}</File>
      );
    })}
  </ul>
);

const App = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <FileUploadSection />
        <FolderUploadSection />
        <Dropzone onDrop={setFiles}/>
        <p>dropped files</p>
        <FileList data={files} />
      </header>
    </div>
  );
};

export default App;
