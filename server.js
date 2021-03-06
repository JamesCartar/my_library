if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const connectDB = require("./db/connect");
const HomeRouter = require("./routes/index");
const categoryRouter = require("./routes/category");

// models
// const userModel = require("../models/user");
// const pdfBookModel = require("../models/pdfbook");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));

app.use("/", HomeRouter);
app.use("/category", categoryRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening on port http://www.localhost:3000`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
