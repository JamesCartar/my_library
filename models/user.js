const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide user name !"],
  },
  email: {
    type: String,
    trim: true,
    unique: [true, "User Already exists !"],
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    required: [true, "Please provide email !"],
  },
  password: {
    type: String,
    required: [true, "Please provide password !"],
  },
  profileImage: {
    type: Buffer,
    required: [true, "Please provide profile image !"],
  },
  imageType: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.virtual("profileImagePath").get(function () {
  if (this.profileImage != null && this.imageType != null) {
    return `data:${
      this.imageType
    };charset=utf-8;base64,${this.profileImage.toString("base64")}`;
  }
  return;
});

module.exports = mongoose.model("user", userSchema);
