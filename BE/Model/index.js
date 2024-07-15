const mongoose = require('mongoose');
const ApplyJob = require('./ApplyJob.model');
const JobCategory = require('./JobCategory.model');
const Job = require('./Job.model');
const Mod = require('./Mod.model');
const User = require('./User.model');
const Company = require('./Company.model');
const Post = require('./Post.model');
const Report = require('./Report.model');
const Notification = require('./Notification.model');
const Message = require('./Message.model');
const Candidate = require('./Candidate.model');
const Staff = require('./Staff.model');
const HR = require('./HR.model');
const HRManager = require('./HRManager.model');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.ApplyJob = ApplyJob;
db.JobCategory = JobCategory;
db.Job = Job;
db.Mod = Mod;
db.User = User;
db.Company = Company;
db.Post = Post;
db.Report = Report;
db.Notification = Notification;
db.Message = Message;
db.Candidate = Candidate;
db.Staff = Staff;
db.HR = HR;
db.HRManager = HRManager;

db.connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME
    }).then(() => console.log("Connect to MongoDB success"))
        .catch(error => console.error(error.message));
}

module.exports = db;