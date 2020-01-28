import React, {useState} from 'react';
import './App.css';

const FileUpload = props => (
  <input
    type='file'
    {...props}
  />
)

const FolderUpload = props => (
  <FileUpload
    webkitdirectory=''
  />
)

function App() {
  const [dragOver, setDragOver] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <p>Upload a file</p>
        <FileUpload />
        <p>Upload a folder</p>
        <FolderUpload />
        <p
          onDragOver={e => {
            e.preventDefault()
          }}
          onDragEnter={e => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={e => {
            e.preventDefault()
            setDragOver(false)
          }}
          onDrop={e => {
            setDragOver(false)
            console.log('file(s) dropped')
            e.preventDefault()
            e.stopPropagation()

            const {items, files} = e.dataTransfer
            if (items) {
              for (let i = 0; i < items.length; i++) {
                console.log('item', items[i].kind)
              }
            } else {
              for (let f = 0; f < files.length; f++) {
                console.log('file', files[f].name)
              }
            }
            console.log('list o files', e.dataTransfer.items)
          }}
          style={{
            border: '2px solid #fff8',
            background: dragOver && '#fff2',
            width: '98%',
            height: '10em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          drop files and folders
        </p>
      </header>
    </div>
  );
}

export default App;
