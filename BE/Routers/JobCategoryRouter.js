const JCController = require('../Controller/JobCategoryController.js');
const express = require('express');

const JobCategoryRouter = express.Router();

JobCategoryRouter.post('/insert-job-category', (req, res) => {
    JCController.insertJobCategory(req, res);
});


JobCategoryRouter.get('/get-all-categories', JCController.getAllCategories);

JobCategoryRouter.post('/job-types', JCController.addJobType);

module.exports = JobCategoryRouter ;