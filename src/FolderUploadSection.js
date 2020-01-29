import React from 'react';
import {FolderUpload} from './Input';

const FolderUploadSection = props => {
  return (
    <div {...props}>
      <p>Upload a folder</p>
      <FolderUpload />
    </div>
  );
};

export default FolderUploadSection;
