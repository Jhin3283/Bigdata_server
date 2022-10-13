// src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const indexRouter = require("./routes/index")
const fs = require("fs")
const path = require("path")

require('dotenv').config();

var corsOptions = {
  origin: '*',
  // credentials: true,
  // methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));
//app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",indexRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
