const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const tagsRouter = require("./routes/tag");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const url =
  "mongodb+srv://sarah:hello@cluster0.z9kd34g.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/graffiti", tagsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
