import React from 'react';

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

const Input = {
  FileUpload,
  FolderUpload
}

export default Input
export {
  FileUpload,
  FolderUpload
}

