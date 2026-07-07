# Task Management API

A simple REST API built using Node.js and Express.js.

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task

## Tech Stack

- Node.js
- Express.js

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

## API Endpoints

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |