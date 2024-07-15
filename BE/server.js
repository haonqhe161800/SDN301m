require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./Model/index.js');

const authenToken = require('./Middleware/AuthenToken.js');
const server = require('./Service/SocketIO.js').server;

const applyJobRouter = require('./Routes/ApplyJob.route.js');
const chatRouter = require('./Routes/Chat.route.js');
const companyRouter = require('./Routes/Company.route.js');
const hrRouter = require('./Routes/Hr.route.js');
const hrManagerRouter = require('./Routes/HrManager.route.js');
const jobCategoryRouter = require('./Routes/JobCategory.route.js');
const modRouter = require('./Routes/Mod.route.js');
const notificationRouter = require('./Routes/Notification.route.js');
const paymentRouter = require('./Routes/Payment.route.js');
const postRouter = require('./Routes/Post.route.js');
const reportRouter = require('./Routes/Report.route.js');
const staffRouter = require('./Routes/Staff.route.js');
const userRouter = require('./Routes/User.route.js');

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to RESTFull API G1CV",
    });
});

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/report', reportRouter);
app.use('/api/company', companyRouter);
app.use('/api/staff', staffRouter);
app.use('/api/job-category', jobCategoryRouter);
app.use('/api/hr-manager', hrManagerRouter);
app.use('/api/notifications', notificationRouter); //Nhan thong bao
app.use('/api/messages', chatRouter); //Chat HR
app.use('/api/payment', paymentRouter); //Payment VNPAY
app.use('/api/apply-job', applyJobRouter);
app.use('/api/hr', hrRouter);
app.use('/api/mod', modRouter);

app.get('/api/protected', authenToken, (req, res) => {
    res.send("hello world");
});

app.use(async (req, res, next) => {
    next(httpErrors.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

// Socket IO - Xử lí tin nhắn
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Server is running at: http://${process.env.HOST_NAME}:${process.env.PORT}`);
    db.connectDB();
});
