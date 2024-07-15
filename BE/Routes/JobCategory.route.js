const JCController = require('../Controller/JobCategory.controller');
const express = require('express');
const bodyParser = require('body-parser');

const JobCategoryRouter = express.Router();
JobCategoryRouter.use(bodyParser.json());

JobCategoryRouter.post('/insert-job-category', (req, res) => {
    JCController.insertJobCategory(req, res);
});


JobCategoryRouter.get('/get-all-categories', JCController.getAllCategories);

JobCategoryRouter.post('/job-types', JCController.addJobType);

module.exports = JobCategoryRouter ;