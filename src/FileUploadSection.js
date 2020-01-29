import React from 'react';
import {FileUpload} from './Input';

const FileUploadSection = props => {
  return (
    <div {...props}>
      <p>Upload a file</p>
      <FileUpload />
    </div>
  )
};

export default FileUploadSection;
