const express = require ("express")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes")

const app = express()

app.use ("/api/v1", mainRouter);  // /api/v1/router ke andar jana 

app.listen(3000, (req, res) => {
    console.log("running server on port 3000")
})