const mongoose = require("mongoose");

const rpsls = new mongoose.Schema({name: String, date: {type: Date, default: Date.now()},result: String }, {collection: "gameback"});

module.exports =  mongoose.model("rpsls",rpsls);