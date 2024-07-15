const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobCategory = new Schema({
    name: {type: String, required: true, max: 200},
    avatar: {type: String, required: true, max: 200},
    description: { type: String }
}, {
    timestamps: true
});

const JobCategory = mongoose.model('JobCategory', jobCategory);
module.exports = JobCategory;