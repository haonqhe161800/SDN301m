require("dotenv").config();
const express = require("express");
const moragn = require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index");


const app = express();

app.use(bodyParser.json());
app.use(moragn("dev"));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to RESTFull API",
    });
});

app.use(async (req, res, next) => {
    next(httpErrors.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Server is running at: http://${process.env.HOST_NAME}:${process.env.PORT}`);
    db.connectDB();
})