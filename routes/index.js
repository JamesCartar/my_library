const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const userModel = require("../models/user");
const pdfBookModel = require("../models/pdfbook");

const imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];

let userInfo;

router.get("/", async (req, res) => {
  const homeBooks = await getPdfBooks("Most Popular")
    .skip(Math.floor(Math.random() * 10))
    .limit(20);
  const educationBooks = await getPdfBooks("Academic & Education");
  const artBooks = await getPdfBooks("Art");
  const biographyBooks = await getPdfBooks("Biography");
  const businessBooks = await getPdfBooks("Business & Career");
  const psychologyBooks = await getPdfBooks("Psychology");
  const enviromentBooks = await getPdfBooks("Environment");
  const fictionBooks = await getPdfBooks("Fiction & Literature");
  const healthBooks = await getPdfBooks("Health & Fitness");
  const lifestyleBooks = await getPdfBooks("Lifestyle");
  const personalBooks = await getPdfBooks("Personal Growth");
  const politicsBooks = await getPdfBooks("Politics & Laws");
  const religionBooks = await getPdfBooks("Religion");
  const scienceBooks = await getPdfBooks("Science & Research");
  const technologyBooks = await getPdfBooks("Technology");

  res.render("home", {
    technologyBooks,
    enviromentBooks,
    lifestyleBooks,
    user: userInfo,
    biographyBooks,
    educationBooks,
    businessBooks,
    psychologyBooks,
    personalBooks,
    politicsBooks,
    religionBooks,
    fictionBooks,
    scienceBooks,
    healthBooks,
    homeBooks,
    artBooks,
  });
});

function getPdfBooks(category) {
  return pdfBookModel
    .find({
      category: category,
    })
    .limit(25);
}

router.get("/search", async (req, res) => {
  let bookName = req.query.title;
  let book = await pdfBookModel.findOne({ title: bookName });

  if ((book != null) & (book != "")) {
    let similarBooks = await pdfBookModel
      .find({ category: book.category })
      .limit(25);
    res.render("searchBook", { book, similarBooks });
    // res.send(book);
  } else {
    res.render("bookNotFound", { bookName });
  }
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
        userInfo = userData;
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
    userInfo = userData;
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

router.get("/book/:id", async (req, res) => {
  let bookId = req.params.id;
  let book = await pdfBookModel.findOne({ _id: bookId });
  let similarBooks = await pdfBookModel
    .find({ category: book.category })
    .limit(25);
  res.render("searchBook", { book, similarBooks });
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
