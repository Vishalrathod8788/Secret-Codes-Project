# 🔐 Secret Codes File Manager API

A Node.js and Express-based backend API that manages a text file (`secret.txt`) with full CRUD operations. You can write, read, search, and backup your secret codes with this lightweight file management system.

## 🚀 Features

- **Write/Overwrite:** Save new data to the file
- **Append:** Add new data without removing existing content
- **List:** View all saved codes in array format
- **Search:** Case-insensitive search functionality (returns True/False)
- **Metadata:** Get file size and last update time (IST format)
- **Backup:** Create file duplicate with admin access
- **Clear:** Clear all file content without deleting the file
- **Delete:** Permanently remove the file

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **File System:** Node.js `fs` module
- **ES Modules:** Modern JavaScript import/export syntax

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vishalrathod8788/Secret-Codes-Project.git
   cd Secret-Codes-Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Server will run on:** `http://localhost:3000`

## 📍 API Endpoints

| Method | Endpoint | Description | Body / Query |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Read entire file content | - |
| **GET** | `/list` | Get all codes as array | - |
| **POST** | `/` | Write/overwrite file | `{"secret_message": "..."}` |
| **PATCH** | `/` | Append new content | `{"secret_message": "..."}` |
| **GET** | `/metadata` | File size & timestamps | - |
| **GET** | `/search` | Case-insensitive search | `?q=searchterm` |
| **PATCH** | `/clear` | Empty file content | - |
| **POST** | `/backup` | Create backup file | `{"admin": true}` |
| **DELETE** | `/` | Delete file permanently | - |

## 📝 API Usage Examples

### Write Content
```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"secret_message": "My first secret code"}'
```

### Append Content
```bash
curl -X PATCH http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"secret_message": "Another secret code"}'
```

### Search Content
```bash
curl "http://localhost:3000/search?q=secret"
```

### Create Backup (Admin Only)
```bash
curl -X POST http://localhost:3000/backup \
  -H "Content-Type: application/json" \
  -d '{"admin": true}'
```

## 📁 Project Structure

```
Secret-Codes-Project/
├── controllers/
│   └── secretController.js    # All API logic
├── routes/
│   └── secretRoutes.js        # Route definitions
├── app.js                     # Main server file
├── package.json               # Dependencies
├── secret.txt                 # Data storage file
└── README.md                  # Documentation
```

## 🔧 Environment Variables

- `PORT`: Server port (default: 3000)

## 📚 Learning Outcomes

This project demonstrates:

- HTTP Methods (GET, POST, PATCH, DELETE) implementation
- Timezone conversion (UTC to IST)
- Node.js asynchronous file handling
- Case-insensitive search logic
- Express.js middleware usage
- ES6 modules and modern JavaScript
- RESTful API design principles
- Error handling and status codes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Vishal Rathod**
- GitHub: [@Vishalrathod8788](https://github.com/Vishalrathod8788)

---

Made with ❤️ for learning Express.js and Node.js file operations