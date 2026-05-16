import React from 'react';
import './FileList.css';
import FileItem from './FileItem';

function FileList({ files, loading, onRefresh, onDelete, onDownload }) {
  return (
    <div className="file-list-container">
      <div className="file-list-header">
        <div>
          <h2>Your Files</h2>
          <p className="file-count">{files.length} file{files.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          className={`refresh-button ${loading ? 'loading' : ''}`}
          onClick={onRefresh}
          disabled={loading}
          title="Refresh file list"
        >
          🔄
        </button>
      </div>

      {loading && files.length === 0 ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading files...</p>
        </div>
      ) : files.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No files yet</h3>
          <p>Upload your first file using the upload area above</p>
        </div>
      ) : (
        <div className="file-grid">
          {files.map((file) => (
            <FileItem
              key={file.id}
              file={file}
              onDelete={onDelete}
              onDownload={onDownload}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FileList;
