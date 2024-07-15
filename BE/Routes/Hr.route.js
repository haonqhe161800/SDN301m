const express = require('express');
const bodyParser = require('body-parser');
const hrController = require('../Controller/Hr.controller');

const hrRouter = express.Router();
hrRouter.use(bodyParser.json());

hrRouter.get('/job-postings', hrController.getJobPostings);

hrRouter.post('/job-postings', hrController.createJobPosting);

hrRouter.put('/job-postings/:jobId', hrController.updateJobPosting);
module.exports = hrRouter;
