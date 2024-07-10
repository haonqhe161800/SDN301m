const express = require("express");
const insertUser = require("../Controller/UserController.js").insertUser;
const updateUser = require("../Controller/UserController.js").updateUser;
const forgotPassword = require("../Controller/UserController.js").forgotPassword;
const loginUser = require("../Controller/UserController.js").loginUser;
const applyJob = require("../Controller/UserController.js").applyJob;
const updatePasswordByUsername = require("../Controller/UserController.js").updatePasswordByUsername;
const followCompany = require("../Controller/UserController.js").followCompany;
const followPost = require("../Controller/UserController.js").followPost;
const unfollowPost = require("../Controller/UserController.js").unfollowPost;
const unfollowCompany = require("../Controller/UserController.js").unfollowCompany;
const getAllPostFollowed = require("../Controller/UserController.js").getAllPostFollowed;
const getAllCompanyFollowed = require("../Controller/UserController.js").getAllCompanyFollowed;
const authenToken = require("../Middleware/AuthenToken.js");
const UserRouter = express.Router();

UserRouter.post("/register", (req, res) => {
    insertUser(req, res);
});

UserRouter.put("/update-user/:id", authenToken, (req, res) => {
    updateUser(req, res);
});

UserRouter.patch("/forgot-password", (req, res) => {
    forgotPassword(req, res);
});


UserRouter.post('/login', (req, res) => {
    loginUser(req, res);
});

UserRouter.post('/apply-jobs', authenToken, (req, res) => {
   applyJob(req, res); 
});

UserRouter.put('/update-password', authenToken, (req, res) => {
    updatePasswordByUsername(req, res);
})

UserRouter.put('/:userId/follow-post', authenToken, (req, res) => {
    followPost(req, res);
});
UserRouter.put('/:userId/unfollow-post', authenToken, (req, res) => {
    unfollowPost(req, res);
});

UserRouter.put('/:userId/follow-company', authenToken, (req, res) => {
    followCompany(req, res);
});
UserRouter.put('/:userId/unfollow-company', authenToken, (req, res) => {
    unfollowCompany(req, res);
});

UserRouter.get('/:userId/get-all-posts-followed', authenToken, (req, res) => {
    getAllPostFollowed(req, res);
});
UserRouter.get('/:userId/get-all-companies-followed', (req, res) => {
    getAllCompanyFollowed(req, res);
});

module.exports = { UserRouter};

