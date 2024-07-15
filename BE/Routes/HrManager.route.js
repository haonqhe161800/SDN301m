const express = require('express');
const bodyParser = require('body-parser');
const hrManagerController = require('../Controller/HrManager.controller');

const hrManagerRouter = express.Router();
hrManagerRouter.use(bodyParser.json());

hrManagerRouter.get('/candidates', hrManagerController.getCandidatesByStatus);

hrManagerRouter.get('/candidates/:candidateId/cv', hrManagerController.getCandidateCV);

hrManagerRouter.get('/candidates/:candidateId', hrManagerController.getCandidateInfo);

hrManagerRouter.post('/candidates/:candidateId/accept-cv', hrManagerController.acceptCV);

hrManagerRouter.post('/candidates/:candidateId/reject-cv', hrManagerController.rejectCV);

module.exports = hrManagerRouter;
