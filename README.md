# Project Documentation

## Overview
This project is a full-stack web application that provides user management functionalities including user signup, signin, and profile updates. It uses a Node.js backend with Express for routing and MongoDB for data storage. The frontend is built with React, providing a responsive user interface.

## Backend

### Technologies
- **Node.js**: Runtime environment for the backend.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database used to store user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **jsonwebtoken**: Library to issue JSON Web Tokens for user authentication.
- **Zod**: Library for building validation schemas.


### API Endpoints
- **POST /signup**: Registers a new user.
- **POST /signin**: Authenticates a user and returns a token.
- **PUT /**: Updates user profile information.
- **GET /bulk**: Fetches user data based on a filter.

## Frontend

### Technologies
- **React**: Library for building the user interface.
- **Axios**: Promise based HTTP client for making requests to the backend.

### Pages
- **Dashboard**: Displays user information and balance.
- **Signup**: Allows new users to register.
- **Login**: Allows existing users to log in.

## Setup and Running

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Start the backend server:
   ```bash
   cd backend && npm start
   ```
4. Start the frontend application:
   ```bash
   cd frontend && npm start
   ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
