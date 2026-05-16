# Distributed File System - React Frontend

This is a modern React frontend for the Distributed File System backend built with Spring Boot.

## 🎨 Features

- **Drag & Drop Upload** - Intuitive file upload with drag-and-drop support
- **File Management** - View, download, and delete files with ease
- **Real-time Updates** - Auto-refresh file list after operations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Beautiful UI** - Modern gradient design with smooth animations
- **File Information** - Display file size and upload date
- **Error Handling** - User-friendly error messages and loading states

## 📋 Prerequisites

- Node.js 14+ and npm 6+
- Backend API running on `http://localhost:8080`

## 🚀 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Configuration

The API base URL is configured in `src/App.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

Update this if your backend is running on a different host or port.

## 📁 Project Structure

```
src/
├── App.js                 # Main application component
├── App.css                # App styles
├── index.js               # React entry point
├── index.css              # Global styles
└── components/
    ├── Header/            # App header with title
    ├── FileUpload/        # File upload component
    ├── FileList/          # File list container
    └── FileItem/          # Individual file card
```

## 🎯 Components

### Header
Displays the application title and description.

### FileUpload
Handles file uploads with drag-and-drop functionality. Supports single and multiple file uploads.

### FileList
Displays all files in a responsive grid layout with refresh functionality.

### FileItem
Individual file card showing:
- File icon (based on file type)
- File name
- File size
- Upload date
- Download and delete buttons

## 📱 Responsive Breakpoints

- **Desktop**: Full grid with 3+ columns
- **Tablet**: 2-3 column grid (768px and below)
- **Mobile**: Single column (480px and below)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **react**: ^18.2.0 - React library
- **react-dom**: ^18.2.0 - React DOM rendering
- **axios**: ^1.4.0 - HTTP client for API calls
- **react-scripts**: 5.0.1 - Build and test scripts

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## 🔗 Backend API Endpoints

The frontend expects the following API endpoints:

- `GET /api/files` - Get all files
- `POST /api/files/upload` - Upload a file
- `DELETE /api/files/{id}` - Delete a file
- `GET /api/files/{id}/download` - Download a file

## 🐛 Troubleshooting

### "Failed to fetch files" error
- Ensure the backend is running on `http://localhost:8080`
- Check CORS settings in the backend
- Verify the API endpoints match

### File upload fails
- Check file size limits in the backend
- Ensure proper formData handling
- Verify multipart/form-data content type

### Styling issues
- Clear browser cache
- Ensure all CSS files are in the correct locations
- Check for CSS import errors in the browser console

## 📝 License

Same as the main Distributed File System project

## 👥 Contributing

Feel free to submit pull requests for improvements!
