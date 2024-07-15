const connect = require("./Connection/DBConnection.js").connect;
const express = require('express');
const UserRouter = require("./Routers/UserRouter.js").UserRouter;
const bodyParser = require('body-parser');
const PostRouter = require("./Routers/PostRouter.js").PostRouter;
const notificationRouter = require("./Routers/NotificationRouter.js");
const ReportRouter = require('./Routers/ReportRouter.js');
const authenToken = require('./Middleware/AuthenToken.js');
const CompanyRouter = require('./Routers/CompanyRouter.js').CompanyRouter;
const hrManagerRouter = require("./Routers/HrManagerRouter.js");
const modRouter = require("./Routers/ModRouter.js");
const hrRouter = require("./Routers/HrRouter.js");
const dotenv = require('dotenv');
const cors = require('cors');
const StaffRouter = require('./Routers/StaffRouter.js');
const JobCategoryRouter = require('./Routers/JobCategoryRouter.js');
const HrManagerRouter = require("./Routers/HrManagerRouter.js");
const server = require('./Service/SocketIO.js').server;
const ApplyJobRouter = require("./Routers/ApplyJobController.js").ApplyJobRouter;

dotenv.config();
const app = express();
const port = 9999;
const serverPort = 8080;
app.use(cors())

//Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Connect to DB
connect();
//Get router
app.use('/api/user', UserRouter);
app.use('/api/post', PostRouter);
app.use('/api/report', ReportRouter);
app.use('/api/company', CompanyRouter)
app.use('/api/staff', StaffRouter)
app.use('/api/job-category', JobCategoryRouter)
app.use('/api/hr-manager', HrManagerRouter)
//Nhan thong bao
app.use('/api/notifications', notificationRouter);

app.get('/api/protected', authenToken, (req, res) => {
    res.send("hello world")
})

app.use('/api/apply-job', ApplyJobRouter);

app.use('/api/hr', hrRouter);
app.use('/api/mod', modRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
