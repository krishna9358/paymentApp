const express = require ("express")
const router = require("./routes")


const app = express()

app.use ("/api/v1", router);  // /api/v1/router ke andar jana 