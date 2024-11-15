const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        id: Number,
        title: String,
        liveDemo: String,
        githubRepo: String,
        telegramBot: String,
        extraClass: String,
    },
    {
        timestamps: true,
    }
);

const projectModel = mongoose.model("pgdatas", projectSchema);
module.exports = projectModel;
