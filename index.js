
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});