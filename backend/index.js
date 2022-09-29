const express = require("express");
const app = express();
const colors = require("colors");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = 8000;

app.get("/", function (req, res) {
    res.status(200).json({message: "Node server is listening!"});
});

app.get("/test", function (req, res) {
    res.status(200).json({message: "Server is listening"}); 
})

app.listen(PORT, function (req, res) {
    console.log(`Server is listening at server: ${PORT}`.cyan.bold.underline);
});


