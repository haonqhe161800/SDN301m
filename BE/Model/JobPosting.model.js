
const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobPostingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    skillsRequired: {
        type: [String],
        required: true,
    }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;