var express = require("express");
var router = express.Router();

router.get("/test", (req, res) => {
    console.log("Test route hit");
    res.send("Test route works!");
});

module.exports = router;