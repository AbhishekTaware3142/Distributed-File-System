# Distributed File System

A modern, scalable distributed file system with a Spring Boot backend and React frontend.

## 🎯 Project Overview

This project demonstrates a complete distributed file system implementation with:
- **Backend**: Spring Boot, Java 17, MySQL, RESTful APIs
- **Frontend**: React 18, Axios, Modern UI with animations

## 📦 Features

### Backend
- Spring Data JPA & JDBC integration
- RESTful APIs for file operations
- MySQL database backend
- Maven build system
- Multi-server distributed architecture

### Frontend
- Modern React 18 UI
- Drag & drop file upload
- File management (download, delete)
- Real-time file list updates
- Responsive design (mobile, tablet, desktop)
- Beautiful glass-morphism UI
- 20+ file type icons

## 📋 Prerequisites

### Backend
- Java 17 or higher
- Maven 3.6+
- MySQL Server
- Git

### Frontend
- Node.js 14+ and npm 6+
- Modern web browser

## 🚀 Installation & Setup

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AbhishekTaware3142/Distributed-File-System.git
   cd Distributed-File-System
   ```

2. Configure MySQL:
   - Create a new database
   - Update `application.properties` with your database credentials

3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will open on `http://localhost:3000`

## 🔗 API Endpoints

The frontend connects to the following API endpoints:

- `GET /api/files` - Get all files
- `POST /api/files/upload` - Upload a file (multipart/form-data)
- `DELETE /api/files/{id}` - Delete a file
- `GET /api/files/{id}/download` - Download a file

## 📁 Project Structure

```
Distributed-File-System/
├── backend files (Java)
│   ├── DistributedFileSystemApplication.java
│   ├── FileClient.java
│   ├── FileServer.java
│   └── ...
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── Header/
│   │       ├── FileUpload/
│   │       ├── FileList/
│   │       └── FileItem/
│   ├── README.md
│   └── .gitignore
└── README.md
```

## 🎨 Frontend Features

### Header Component
- Animated header with title and description
- Responsive design

### FileUpload Component
- Drag & drop functionality
- Multi-file upload support
- File size validation
- Loading states

### FileList Component
- Grid-based file display
- Real-time file refresh
- File count display
- Empty state handling
- Loading animations

### FileItem Component
- Smart file type icons
- File size and date display
- Download button
- Delete button with confirmation
- Hover animations

## 🔧 Configuration

### Backend Configuration
Edit `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/dfs
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
```

### Frontend Configuration
Edit `src/App.js`:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

## 📱 Responsive Breakpoints

- **Desktop**: Full grid with 3+ columns (1024px+)
- **Tablet**: 2-3 column grid (768px - 1024px)
- **Mobile**: Single column (below 768px)

## 🛠️ Available Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Backend
- `mvn clean install` - Build the project
- `mvn spring-boot:run` - Run the application
- `mvn test` - Run tests

## 🐛 Troubleshooting

### Backend Issues
- **Port already in use**: Change port in `application.properties`
- **Database connection error**: Verify MySQL is running and credentials are correct
- **Build errors**: Ensure Java 17+ is installed

### Frontend Issues
- **Failed to fetch files**: Ensure backend is running on port 8080
- **CORS errors**: Check backend CORS configuration
- **File upload fails**: Verify backend upload endpoint and file size limits

## 📦 Dependencies

### Backend
- Spring Boot 3.x
- Spring Data JPA
- MySQL Connector
- Maven plugins

### Frontend
- React 18.2.0
- React DOM 18.2.0
- Axios 1.4.0
- React Scripts 5.0.1

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 File Size Limits

- Default: 100MB per file
- Configurable in backend settings

## 🚀 Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy the 'build' folder to your hosting service
```

### Backend
```bash
mvn clean package
# Run the generated JAR file
java -jar target/distributed-file-system.jar
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For issues and questions, please create an issue in the repository.

## 🔗 Links

- **Repository**: https://github.com/AbhishekTaware3142/Distributed-File-System
- **Backend Docs**: See backend files for Spring Boot configuration
- **Frontend Docs**: See `frontend/README.md` for frontend details

---

**Last Updated**: 2026-05-16  
**Status**: Active Development  
**Version**: 1.0.0
