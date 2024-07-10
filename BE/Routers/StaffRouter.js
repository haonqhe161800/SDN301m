const express = require('express');
const getAllStaffs = require('../Controller/StaffController.js').getAllStaffs;
const getStaffsByCompanyId = require('../Controller/StaffController.js').getStaffsByCompanyId;
const insertStaff = require('../Controller/StaffController.js').insertStaff;
const updateStaff = require('../Controller/StaffController.js').updateStaff;
const loginForStaff = require('../Controller/StaffController.js').loginForStaff;
const StaffRouter = express.Router();
// Lấy tất cả dữ liệu nhân viên
StaffRouter.get('/get-all-staffs', (req, res) => getAllStaffs(req, res));
StaffRouter.get('/get-staffs/:companyId', (req, res) => getStaffsByCompanyId(req, res));
StaffRouter.post('/insert-staff', (req, res) => insertStaff(req, res));   
StaffRouter.put('/update-staff/:id', (req, res) => updateStaff(req, res)); 
StaffRouter.post('/login', loginForStaff);

module.exports = StaffRouter;