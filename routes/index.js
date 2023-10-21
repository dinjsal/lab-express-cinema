const express = require("express");
const router = express.Router();
const MONGODB_URI = PROCESS.ENV.MONGODB_URI;

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
