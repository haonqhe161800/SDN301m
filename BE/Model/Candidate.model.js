const mongoose = require('mongoose');
const {Schema} = mongoose;

const candidateSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    status: { type: String, enum: ['CV Passed', 'Interviewed', 'Hired'], default: 'CV Passed' },
    cv: { type: String, required: true }, // Giả sử CV được lưu dưới dạng văn bản
    cvStatus: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
