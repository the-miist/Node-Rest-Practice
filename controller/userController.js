let user = require("../models/userModel");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

let getUser = async (req, resp) => {
  try {
    resp.status(201).send(await user.find({}));
  } catch (error) {
    console.log(error);
    resp.status(500).send("Something went wrong!");
  }
};

let saveUser = async (req, resp) => {
  let userDetails = req.body;
  let userPassword = await bcrypt.hash(userDetails.password, 10);
  try {
    await user.create({
      id: userDetails.id,
      username: userDetails.username,
      password: userPassword,
    });
    resp.status(201).send("User created");
  } catch (error) {
    console.log(error);
    resp.status(500).send("Something went wrong!");
  }
};

let login = async (req, resp) => {
  let userDetails = req.body;
  let dbUser = await user.findOne({ username: userDetails.username });
  if (dbUser) {
    try {
      let isPasswordEqual = await bcrypt.compare(
        userDetails.password,
        dbUser.password
      );
      if (isPasswordEqual) {
        // JWT Token generation
        let token = jwt.sign({ username: dbUser.username }, "NodeJsRestApi", {
          expiresIn: "5h",
        });
        resp.status(201).send(token);
      } else {
        resp.status(401).send("User not authenticated");
      }
    } catch (error) {
      resp.status(500).send("Something went wrong!");
    }
  } else {
    resp.status(404).send("User not found!");
  }
};

let verifyToken = (req, resp, next) => {
  let token;
  if (req.headers["authorization"]) {
    token = req.headers["authorization"].split(" ")[1];
  } else {
    resp.status(401).send("Please provide access token");
  }

  try {
    if (jwt.verify(token, "NodeJsRestApi")) {
      next();
    } else {
      resp.status(401).send("User not authenticated!");
    }
  } catch (error) {
    resp.status(401).send("User not authenticated!");
  }
};

module.exports = { getUser, saveUser, login, verifyToken };