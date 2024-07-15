const mongoose = require("mongoose");
const {Schema} = mongoose;

const HRSChema = new Schema({
    _id: Schema.Types.ObjectId,
    account: {type: String, required: true, max: 200},
    password: {type: String, required: true, max: 200},
    name: {type: String, required: true, max: 200},
    companyId: {type: Schema.Types.ObjectId, ref: 'Company'},
});

const HR = mongoose.model('HR', HRSChema);
module.exports = HR;