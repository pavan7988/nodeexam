# Node.js CRUD Application

This project is a simple Node.js application that implements CRUD (Create, Read, Update, Delete) operations using Express and MySQL for seamless data management. It is designed to be tested through Postman or Talend API Tester.

## Project Structure

```
nodejs-crud-app
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── config
│   │   └── dbConfig.js
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nodejs-crud-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MySQL database credentials:
   ```
   DB_HOST=your_host
   DB_USER=your_user
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```

## Running the Application

To start the application, run:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Create User
- **Endpoint:** `POST /users`
- **Request Body:** 
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

### Get User by ID
- **Endpoint:** `GET /users/:id`

### Update User
- **Endpoint:** `PUT /users/:id`
- **Request Body:** 
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

### Delete User
- **Endpoint:** `DELETE /users/:id`

### Get All Users
- **Endpoint:** `GET /users`

## Testing

You can test the API using Postman or Talend API Tester by sending requests to the endpoints listed above. Make sure to set the appropriate HTTP method and headers (if necessary).

## License

This project is licensed under the MIT License.