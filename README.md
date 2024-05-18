## Overview
This project is a basic payment application built using the MERN stack, which includes MongoDB, Expresjs, React.js, and Node.js. It features user authentication, input validation, and CRUD operations on user data.

## Tech Stack
- **Express.js**: Used as the HTTP server.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **React.js**: A JavaScript library for building user interfaces.
- **MongoDB**: NoSQL database used to store application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Zod**: Library for input validation.
- **jsonwebtoken**: Library to issue JSON Web Tokens for authentication.

## Project Structure
- **Frontend**
  - `src/app.jsx`: Main React component.
- **Backend**
  - `index.js`: Entry point for the backend.
  - `db.js`: Contains MongoDB schema definitions.
  - `routes/`
    - `index.js`: Base router.
    - `userRouter.js`: Router for user-specific routes.
  - `middleware.js`: Contains middleware functions.

## Key Features
- **User Authentication**: Users can sign up and log in. JSON Web Tokens are used for managing sessions.
- **User Management**: Users can update their information. Bulk retrieval of user data based on filters is also supported.
- **Input Validation**: Using Zod to ensure that the data received from the clients meets the expected format.

## Routes
- **User Routes (`userRouter.js`)**:
  - `POST /signin`: Authenticate user and return a token.
  - `PUT /`: Update user information (requires authentication).
  - `GET /bulk`: Retrieve users in bulk based on a filter.

## Setup and Running
- Ensure you have Node.js and MongoDB installed.
- Clone the repository and run `npm install` to install dependencies.
- Start the server using `node index.js`.
- The frontend can be started by navigating to the `src` directory and running `npm start`.

## Note
- Routing in `index.js` uses `express.Router`. Routes are modularized and the base router redirects to specific route files using `router.use()`.




