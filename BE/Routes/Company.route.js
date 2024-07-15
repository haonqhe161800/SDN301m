const express = require('express');
const bodyParser = require('body-parser');
const CompanyController = require('../Controller/Company.controller');


const CompanyRouter = express.Router();
CompanyRouter.use(bodyParser.json());

CompanyRouter.get('/get-all-companies', CompanyController.getAllCompanies);

CompanyRouter.get('/get-by-id-company/:id', CompanyController.getCompanyById)

CompanyRouter.post('/insert-company', CompanyController.insertCompany);

CompanyRouter.post('/company-followers', CompanyController.followCompany);

CompanyRouter.delete('/company-followers/:id', CompanyController.unfollowCompany);

CompanyRouter.patch('/:companyId', CompanyController.updateCompanyStatus);
CompanyRouter.post('update-company/:id', CompanyController.updateCompany);

CompanyRouter.post('/login', CompanyController.companyLogin);

CompanyRouter.post ('/register-vip', CompanyController.registerCompanyVIP);

module.exports = CompanyRouter;