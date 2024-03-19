let { getUser, saveUser, login } = require("../controller/userController");

let express = require("express");
let router = express.Router();

router.get("/user", getUser);

router.post("/user/register", saveUser);

router.post("/user/login", login);

module.exports = router;
