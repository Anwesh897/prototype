const express = require("express");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

///HomePage
app.get("/", (req, res, next) => {
  res.render("home");
});

///Getting JSON data
const file = "public/json files/";

app.get("/:id", (req, res, next) => {
  const getFile = fs.readFileSync(`${file}${req.params.id}.json`);
  const json = JSON.parse(getFile);
  const songName = json[2].data;
  res.render("index", {
    name: json[0].name,
    image: json[1].urlImage,
    list: songName
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
