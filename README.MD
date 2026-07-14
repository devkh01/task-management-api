# Task Management API

A RESTful API built with Node.js, Express.js, PostgreSQL, and JWT Authentication to perform CRUD operations on tasks. The project follows a clean architecture using routes, controllers, middlewares, and environment variables.

## Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Task Routes
- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Task validation middleware
- ID validation middleware
- User validation middleware
- Login validation middleware
- JWT verification middleware
- Environment variable support using `.env`

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg
- bcrypt
- jsonwebtoken
- dotenv

## Project Structure

```
task-api/
│
├── server.js
├── db.js
├── .env
├── .gitignore
│
├── routes/
│   ├── taskRoutes.js
│   └── authRoutes.js
│
├── controllers/
│   ├── taskController.js
│   └── authController.js
│
├── middlewares/
│   ├── validateTask.js
│   ├── validateId.js
│   ├── validateUser.js
│   ├── validateLoginUser.js
│   └── verifyToken.js
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/registerUser` | Register a new user |
| POST | `/auth/loginUser` | Login and receive JWT |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

> **Note:** All task routes require a valid JWT Bearer Token.

## Environment Variables

Create a `.env` file in the project root and add:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_password
DB_PORT=5432

JWT_SECRET=your_secret_key
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

4. Start PostgreSQL

5. Run the server

```bash
npm run dev
```

## Learning Outcomes

Through this project, I learned:

- Express routing
- REST API design
- CRUD operations with PostgreSQL
- Middleware in Express
- Authentication using JWT
- Password hashing with bcrypt
- Protecting routes using middleware
- Request validation
- Environment variables using `.env`
- Organizing a backend project using controllers, routes, and middlewares