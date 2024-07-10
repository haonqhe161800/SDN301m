const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobCategory = new Schema({
    name: {type: String, required: true, max: 200},
    avatar: {type: String, required: true, max: 200},
    description: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('JobCategory', JobCategory);