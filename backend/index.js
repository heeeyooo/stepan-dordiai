const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectModel = require("./models/pgProjects");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getProjects", (req, res) => {
    projectModel
        .find()
        .then((projects) => res.json(projects))
        .catch((err) => res.json(err));
});

mongoose
    .connect(
        "mongodb+srv://stepandordiaiBdWcumZOkcl:Overwatch1@stepandordiaiapi.1ocur.mongodb.net/Node-API?retryWrites=true&w=majority&appName=StepanDordiaiAPI"
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Node API app is running on port 3000");
        });
    })
    .catch(() => {
        console.log(error);
    });
