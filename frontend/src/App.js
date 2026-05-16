import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

const API_BASE_URL = 'http://localhost:8080/api';

function App() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFiles = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/files`);
      setFiles(response.data || []);
    } catch (err) {
      console.error('Error fetching files:', err);
      setError('Failed to fetch files. Make sure the backend is running on port 8080.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`${API_BASE_URL}/files/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      await fetchFiles();
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Failed to upload file');
    }
  };

  const handleFileDelete = async (fileId) => {
    if (!window.confirm('Are you sure you want to delete this file?')) {
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/files/${fileId}`);
      await fetchFiles();
    } catch (err) {
      console.error('Error deleting file:', err);
      setError('Failed to delete file');
    }
  };

  const handleFileDownload = (fileId, fileName) => {
    const downloadUrl = `${API_BASE_URL}/files/${fileId}/download`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName || 'file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <Header />
      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}
      <div className="container">
        <FileUpload onFileUpload={handleFileUpload} />
        <FileList
          files={files}
          loading={loading}
          onRefresh={fetchFiles}
          onDelete={handleFileDelete}
          onDownload={handleFileDownload}
        />
      </div>
    </div>
  );
}

export default App;
