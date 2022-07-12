if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const connectDB = require("./db/connect");

const app = express();
const PORT = 3000 || process.env.PORT;

app.set("vew engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("adfas");
});

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
