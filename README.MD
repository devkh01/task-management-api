# Task Management API

A RESTful API built with Node.js, Express.js, and PostgreSQL to perform CRUD operations on tasks. The project follows a clean architecture using routes, controllers, middlewares, and environment variables.

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Task validation middleware
- ID validation middleware
- Environment variable support using `.env`

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg
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
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── middlewares/
│   ├── validateTask.js
│   └── validateId.js
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |


## Environment Variables

Create a `.env` file in the project root and add:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_password
DB_PORT=5432
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
- Controllers and project architecture
- Request validation
- Environment variables using `.env`