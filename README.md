creating a payment basic app using MERN 

Tech Stack : Express, Nodejs, Reactjs, MongoDB
Express : HTTP Server
mongoose : ODM to connect to MongoDB
zod : Input validation 


Structure: 
1. Frontend - src/app.jsx
2. Backend - index.js
 - db.js - mongo db schema
 - routes/index.js - routes 

*NOTE* : routes/index.js - router = express.Router -> import in index.js -> app.use("/routes redirect to", file name in routes) -> index.js in routes redicrect to another route file using router.use(); 

 - 