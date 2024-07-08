const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME
    }).then(() => console.log("Connect to MongoDB success"))
        .catch(error => console.error(error.message));
}

module.exports = db;