const Company = require("../Model/Company.js").Company;

async function updateCompany(companyId, status) {
    const company = await Company.findOneAndUpdate({_id: companyId}, {vip: status}, {new: true}).exec();
    return company;
}

module.exports = {updateCompany}