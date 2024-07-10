const express = require('express');
const ReportController = require('../Controller/ReportController.js');
const authenToken = require('../Middleware/AuthenToken.js');
const ReportRouter = express.Router();

ReportRouter.get('/get-all-reports', (req, res) => ReportController.getAllReports(req, res));
ReportRouter.get('/get-report/:uid', (req, res) => ReportController.getReportByUserId(req, res));
ReportRouter.post('/add-report',authenToken, (req, res) => ReportController.insertReport(req, res));
ReportRouter.patch('/update-report-status/:rid', (req, res) => ReportController.updateReportStatus(req, res));
ReportRouter.delete('/delete-report/:rid', (req, res) => ReportController.deleteReportById(req, res));

module.exports =  ReportRouter