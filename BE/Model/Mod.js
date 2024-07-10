const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modSchema = new Schema({
    account: {type: String, required: true, max: 200},
    password: {type: String, required: true, max: 200},
});

const Mod = mongoose.model('mod', modSchema);

module.exports = {Mod};