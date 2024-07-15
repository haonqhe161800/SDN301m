const mongoose = require("mongoose");
const {Schema} = mongoose;

const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true, max: 200 }},
    {
    timestamps: true
    });

const Notification = mongoose.model('notification', notificationSchema)
module.exports = Notification;