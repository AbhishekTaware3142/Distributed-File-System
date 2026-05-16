import React, { useState } from 'react';
import './FileUpload.css';

function FileUpload({ onFileUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      uploadFiles(files);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFiles(files);
    }
  };

  const uploadFiles = async (fileList) => {
    setIsUploading(true);
    for (let i = 0; i < fileList.length; i++) {
      try {
        await onFileUpload(fileList[i]);
      } catch (error) {
        console.error(`Error uploading file ${i}:`, error);
      }
    }
    setIsUploading(false);
  };

  return (
    <div
      className={`file-upload ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileInput"
        multiple
        onChange={handleFileSelect}
        disabled={isUploading}
        style={{ display: 'none' }}
      />
      <div className="upload-content">
        <div className="upload-icon">📤</div>
        <h2>Drag and drop files here</h2>
        <p>or</p>
        <label htmlFor="fileInput" className={`upload-button ${isUploading ? 'disabled' : ''}`}>
          {isUploading ? 'Uploading...' : 'Click to browse'}
        </label>
        <p className="file-info">Supported: All file types • Max size: 100MB</p>
      </div>
    </div>
  );
}

export default FileUpload;
