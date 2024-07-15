const mongoose = require("mongoose");
const {Schema} = mongoose;

const applyJobSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    postId: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    companyId: {type: Schema.Types.ObjectId, ref: 'Company', required: true},
    cv: {type: String, required: true},
    status: {type: String, required: true, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING'},
});

const ApplyJob = mongoose.model('ApplyJob', applyJobSchema);
module.exports = ApplyJob;

