if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const bodyParser = require("body-parser");

const connectDB = require("./db/connect");
const HomeRouter = require("./routes/index");
const categoryRouter = require("./routes/category");



const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));

app.use("/", HomeRouter);
app.use("/categories", categoryRouter);

const PORT = process.env.PORT || 7000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port http://www.localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
