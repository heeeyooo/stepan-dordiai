const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    id: Number,
    title: String,
    liveDemo: String,
    githubRepo: String,
    telegramBot: String,
    extraClass: String,
});

const projectModel = mongoose.model("projects", projectSchema);
module.exports = projectModel;
