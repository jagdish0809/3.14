const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("💕 DB connected");
  });

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      phrase: req.body.phrase,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.send({ status: "error", error: "Duplicate email" });
  }
});

// app.post("/api/login", async (req, res) => {
//   const user = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });

//   if (user) {
//     return res.json({ status: "ok", user: true });
//   } else {
//     return res.json({ status: "error", user: false });
//   }
// });
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`🚀 Server ready at port ${port}`);
});
