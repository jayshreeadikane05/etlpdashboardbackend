var express = require("express");
const AuthController = require("../controllers/AuthController");
var router = express.Router();

router.post('/addUser', AuthController.addUser);
router.get('/user', AuthController.getAllUsers);

module.exports = router;
