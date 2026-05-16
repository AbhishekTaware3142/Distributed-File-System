import React from 'react';
import './FileItem.css';

function FileItem({ file, onDelete, onDownload }) {
  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    const icons = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      txt: '📄',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
      gif: '🖼️',
      mp4: '🎬',
      mp3: '🎵',
      zip: '📦',
      rar: '📦',
      7z: '📦',
      exe: '⚙️',
      msi: '⚙️',
      xls: '📊',
      xlsx: '📊',
      ppt: '📽️',
      pptx: '📽️',
      java: '☕',
      js: '📜',
      py: '🐍',
      html: '🌐',
      css: '🎨',
      json: '🔧',
    };
    return icons[ext] || '📎';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="file-item">
      <div className="file-icon">{getFileIcon(file.name)}</div>
      <div className="file-info">
        <h3 className="file-name" title={file.name}>{file.name}</h3>
        <p className="file-size">{formatFileSize(file.size)}</p>
        <p className="file-date">{formatDate(file.uploadDate || new Date())}</p>
      </div>
      <div className="file-actions">
        <button
          className="action-button download"
          onClick={() => onDownload(file.id, file.name)}
          title="Download file"
        >
          📥
        </button>
        <button
          className="action-button delete"
          onClick={() => onDelete(file.id)}
          title="Delete file"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default FileItem;
