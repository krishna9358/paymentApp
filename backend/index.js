const express = require ("express")
const router = require("./routes")
const cors = require("cors")

const app = express()

app.use(cors());
app.use(express.json());
app.use ("/api/v1", router);  // /api/v1/router ke andar jana 

app.listen(3000, (req, res) => {
    console.log("running server on port 3000")
})