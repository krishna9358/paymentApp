# Project Title

Paytm Basic Backend

## Description

This project is a basic backend implementation for a payment system using Node.js, Express, and MongoDB. It includes user authentication, account management, and transaction handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Account Routes](#account-routes)
- [Schemas](#schemas)
  - [User Schema](#user-schema)
  - [Account Schema](#account-schema)
- [Middleware](#middleware)
- [Configuration](#configuration)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/paytm-basic-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd paytm-basic-backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up your MongoDB connection string in a `.env` file:
    ```env
    MONGODB_URI=mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/paytmBasic
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- **POST /user/signup**
  - Description: Register a new user.
  - Request Body:
    ```json
    {
      "username": "user@example.com",
      "password": "password123",
      "firstName": "Krishna",
      "lastName": "Mohan"
    }
    ```
  - Response:
    ```json
    {
      "message": "User created successfully",
      "token": "jwt_token"
    }
    ```

- **POST /user/signin**
  - Description: Authenticate a user.
  - Request Body:
    ```json
    {
      "username": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

- **PUT /user**
  - Description: Update user details.
  - Request Body (example):
    ```json
    {
      "firstName": "Krishna"
    }
    ```
  - Response:
    ```json
    {
      "message": "User updated successfully"
    }
    ```

- **GET /user/bulk**
  - Description: Get a list of users filtered by first or last name.
  - Query Parameters:
    - `filter`: A string to filter users by first or last name.
  - Response:
    ```json
    {
      "user": [
        {
          "username": "user@example.com",
          "firstName": "Krishna",
          "lastName": "Mohan",
          "_id": "user_id"
        }
      ]
    }
    ```

### Account Routes

- **GET /account/balance**
  - Description: Get the balance of the authenticated user's account.
  - Response:
    ```json
    {
      "balance": 1000
    }
    ```

- **POST /account/transfer**
  - Description: Transfer money to another user's account.
  - Request Body:
    ```json
    {
      "amount": 100,
      "to": "recipient_user_id"
    }
    ```
  - Response:
    ```json
    {
      "message": "Transfer Successful"
    }
    ```

## Schemas

### User Schema

- **username**: String, required, unique, trimmed, lowercase, minLength: 3, maxLength: 30
- **password**: String, required, minLength: 6
- **firstName**: String, required, trimmed, maxLength: 50
- **lastName**: String, required, trimmed, maxLength: 50

### Account Schema

- **userId**: ObjectId, required, reference to User
- **balance**: Number, required

## Middleware

- **authMiddleware**: Middleware to authenticate users using JWT.

## Configuration

- **MONGODB_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key for JWT.





