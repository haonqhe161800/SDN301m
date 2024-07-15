const express = require('express');
const bodyParser = require('body-parser');
const staffController = require('../Controller/Staff.controller');

const StaffRouter = express.Router();
StaffRouter.use(bodyParser.json());

// Lấy tất cả dữ liệu nhân viên
StaffRouter.get('/get-all-staffs', staffController.getAllStaffs);
StaffRouter.get('/get-staffs/:companyId', staffController.getStaffsByCompanyId);
StaffRouter.post('/insert-staff', staffController.insertStaff);   
StaffRouter.put('/update-staff/:id', staffController.updateStaff); 
StaffRouter.post('/login', staffController.loginForStaff);

module.exports = StaffRouter;