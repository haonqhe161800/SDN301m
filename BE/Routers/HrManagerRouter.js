const express = require('express');
const hrManagerController = require('../Controller/HrManagerController.js');

const router = express.Router();

router.get('/candidates', hrManagerController.getCandidatesByStatus);

router.get('/candidates/:candidateId/cv', hrManagerController.getCandidateCV);

router.get('/candidates/:candidateId', hrManagerController.getCandidateInfo);

router.post('/candidates/:candidateId/accept-cv', hrManagerController.acceptCV);

router.post('/candidates/:candidateId/reject-cv', hrManagerController.rejectCV);

module.exports = router;
