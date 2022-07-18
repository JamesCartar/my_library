const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const userModel = require("../models/user");

const imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];

let hein;

router.get("/", async (req, res) => {
  const homeBooks = await userModel.find({}).limit(10);
  // console.log(homeBooks);
  res.render("home", { user: hein });
  // res.send({ count: homeBooks.length, data: homeBooks });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  let { user, password } = req.body;
  const userData = await userModel.findOne({
    $or: [{ name: user }, { email: user }],
  });
  try {
    if (userData != null && userData != "") {
      if (await bcrypt.compare(password, userData.password)) {
        hein = userData;
        res.redirect("/");
      } else {
        res.render("login", { errorMessage: "Wrong password !" });
      }
    } else {
      res.render("login", { errorMessage: "username or email incorrect !" });
    }
  } catch (error) {
    console.log(error);
    res.render("login", { errorMessage: error.message });
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword, profileImage } = req.body;
  if (password !== confirmPassword) {
    return res.render("register", {
      errorMessage: "Passwords do not match !",
    });
  }
  const user = new userModel({
    name,
    email,
    password,
  });
  saveProfile(user, profileImage);
  try {
    const userData = await user.save();
    hein = userData;
    res.redirect("/");
  } catch (error) {
    const errorData = error.message.split(" ");
    let message;
    if (
      errorData.includes("name") ||
      errorData.includes("email") ||
      errorData.includes("password") ||
      errorData.includes("image")
    ) {
      message = "Please provide ";
      if (errorData.includes("name")) {
        message += "name, ";
      }
      if (errorData.includes("email")) {
        message += "email, ";
      }
      if (errorData.includes("password")) {
        message += "password, ";
      }
      if (errorData.includes("image")) {
        message += "profile image";
      }
    }
    res.render("register", {
      errorMessage: message || error.message,
    });
  }
});

function saveProfile(user, urlEncoded) {
  if (urlEncoded == null || urlEncoded == "") return;
  const profile = JSON.parse(urlEncoded);
  if (profile != null && imageMimeTypes.includes(profile.type)) {
    user.profileImage = new Buffer.from(profile.data, "base64");
    user.imageType = profile.type;
  }
}

module.exports = router;
