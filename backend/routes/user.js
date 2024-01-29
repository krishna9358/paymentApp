const express = require("express");
const app = express();
const router = express.Router();

router.post("/signup");
router.post("/signin");

module.exports= router;

