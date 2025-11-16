<div align="center">

# 🎯 Focus Flow API

**A robust task management REST API built with modern technologies**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

*Streamline your productivity with secure, efficient task management*

</div>

---

## 🌟 Overview

Focus Flow API provides secure user authentication and comprehensive task management capabilities for productivity applications. Built with TypeScript, Express.js, and TypeORM for maximum reliability and developer experience.

## ✨ Features

### 🔐 **Secure Authentication System**
- **User Registration**: Create new accounts with unique usernames
- **Secure Login**: JWT-based authentication with bcrypt password hashing
- **Password Security**: Industry-standard bcrypt encryption (salt rounds: 10)
- **Token Management**: 1-hour JWT tokens for secure session management
- **Duplicate Prevention**: Automatic username uniqueness validation

### 📋 **Comprehensive Task Management**
- **Create Tasks**: Add new tasks with names and descriptions
- **View All Tasks**: Retrieve complete task lists for authenticated users
- **Individual Task Access**: Get specific tasks by ID
- **Task Deletion**: Remove tasks with proper authorization
- **Automatic Timestamps**: Tasks include creation date tracking
- **Status Tracking**: Boolean status field for task completion monitoring

### 🛡️ **Security & Middleware**
- **JWT Authentication**: Secure token-based authentication system
- **Protected Routes**: All task operations require valid authentication
- **Request Validation**: Built-in input validation and sanitization
- **Error Handling**: Comprehensive error responses with appropriate HTTP status codes
- **CORS Ready**: Express.js setup for cross-origin requests

### 🗄️ **Database Architecture**
- **TypeORM Integration**: Modern ORM with TypeScript support
- **MySQL Database**: Reliable relational database backend
- **Entity Relationships**: User-Task one-to-many relationships
- **Auto-Generated IDs**: Primary key auto-generation for all entities
- **Data Integrity**: Foreign key constraints and relationship management

### 🏗️ **Technical Architecture**
- **TypeScript**: Full type safety and modern JavaScript features
- **Express.js**: Fast, minimalist web framework
- **Modular Design**: Organized controller, model, and middleware structure
- **RESTful API**: Standard HTTP methods and status codes
- **JSON Communication**: Clean JSON request/response format

## 🚀 API Endpoints

<details>
<summary><strong>🔐 Authentication Routes</strong> <code>/api/auth</code></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/signup` | Register new user | 🚫 |
| `POST` | `/login` | User login | 🚫 |

</details>

<details>
<summary><strong>📋 Task Management Routes</strong> <code>/api/task</code></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/add-task` | Create new task | 🔒 |
| `GET` | `/` | Get all tasks | 🔒 |
| `GET` | `/:Id` | Get task by ID | 🔒 |
| `DELETE` | `/:Id` | Delete task by ID | 🔒 |

</details>

## 📊 Data Models

```typescript
// User Entity
{
  userId: number;        // Auto-generated primary key
  username: string;      // Unique identifier
  password: string;      // Bcrypt hashed
  tasks: Task[];         // One-to-many relationship
}

// Task Entity
{
  taskId: number;        // Auto-generated primary key
  taskName: string;      // Task title
  description: string;   // Task details
  dateCreated: Date;     // Automatic timestamp
  status: boolean;       // Completion status
  user: User;           // Many-to-one relationship
}

// Category Entity (Future Enhancement)
{
  id: number;           // Auto-generated primary key
  name: string;         // Category name
}
```

## 🔧 Technology Stack

<table>
<tr>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Database</strong></td>
<td align="center"><strong>Security</strong></td>
<td align="center"><strong>Development</strong></td>
</tr>
<tr>
<td align="center">

• Node.js<br>
• TypeScript<br>
• Express.js<br>
• express-validator

</td>
<td align="center">

• MySQL<br>
• TypeORM<br>
• Entity Relations<br>
• Auto-migrations

</td>
<td align="center">

• JWT Tokens<br>
• bcrypt Hashing<br>
• Protected Routes<br>
• Input Validation

</td>
<td align="center">

• TypeScript Compiler<br>
• Type Definitions<br>
• dotenv Config<br>
• Modular Architecture

</td>
</tr>
</table>

## 🛠️ Development Features

- **Type Safety**: Full TypeScript implementation
- **Environment Configuration**: dotenv support
- **Build System**: TypeScript compilation
- **Modular Architecture**: Separated concerns (Controllers, Models, Middleware)
- **Error Handling**: Comprehensive try-catch blocks with proper HTTP responses
- **Code Organization**: Clean separation of authentication and task logic

## 📝 Response Format

<details>
<summary><strong>✅ Success Responses</strong></summary>

```json
{
  "message": "Operation successful",
  "data": { /* relevant data */ }
}
```

```json
{
  "message": "Login Successful",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

</details>

<details>
<summary><strong>❌ Error Responses</strong></summary>

| Status Code | Description | Example |
|-------------|-------------|----------|
| `400` | Bad Request | Invalid input data |
| `401` | Unauthorized | Invalid credentials |
| `404` | Not Found | Task not found |
| `409` | Conflict | Username already taken |
| `500` | Server Error | Internal server error |

</details>

## 🚦 Getting Started

> **Port**: `8080`  
> **Database**: MySQL with TypeORM configuration  
> **Authentication**: Bearer token in Authorization header  

### Quick Setup
1. Configure your MySQL database
2. Set up TypeORM's AppDataSource
3. Start the server on port 8080
4. Use Bearer tokens for protected endpoints

---

<div align="center">

**Focus Flow API** - *Streamline your productivity with secure, efficient task management*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com)
[![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue.svg)](https://www.typescriptlang.org/)

</div>