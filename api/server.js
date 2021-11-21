const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");

const classesRouter = require("./classes/classes-router");
const usersRouter = require("./users/users-router");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/api/classes", classesRouter);
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the ptct-Anywhere-Fitness API"
    })
})

module.exports = app;
