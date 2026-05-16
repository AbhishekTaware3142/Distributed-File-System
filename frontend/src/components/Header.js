import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-icon">📁</div>
        <div className="header-text">
          <h1>Distributed File System</h1>
          <p>Secure, Scalable File Storage & Management</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
