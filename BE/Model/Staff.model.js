const mongoose = require("mongoose");
const {Schema} = mongoose;

const staffSchema = new Schema({
    account: {type: String, required: true, max: 200, uniquie: true},
    password: {type: String, required: true, max: 200},
    name: {type: String, required: true, max: 200},
    companyId: {type: Schema.Types.ObjectId, ref: 'Company'},
    status: {type: String, required: true, default: 'ACTIVE', enum: ['ACTIVE', 'BANNED']},
    role: {type: String, required: true, default: 'HR', enum: ['HR', 'HRMANAGER']},
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;