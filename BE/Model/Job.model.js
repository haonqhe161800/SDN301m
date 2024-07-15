const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobSchema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
