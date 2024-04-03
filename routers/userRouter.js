let { getUser, saveUser, login, verifyToken, updateUser, verifyUserToken, verifyAdminOrUserToken } = require("../controller/userController");

let express = require("express");
let router = express.Router();

router.get("/", verifyAdminOrUserToken, getUser);

router.post("/register", saveUser);

router.put("/update/:id",verifyAdminOrUserToken, updateUser)

router.post("/login", login);

module.exports = router;
