const multer = require('multer');
const express = require('express');
const ApplyJobController = require('../Controller/ApplyJobController.js');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

const ApplyJobRouter = express.Router();

ApplyJobRouter.post('/upload', upload.single('pdfFile'), ApplyJobController.uploadCV);
ApplyJobRouter.post('/apply', ApplyJobController.applyJob);
ApplyJobRouter.post('/is-applied', ApplyJobController.isAppliedJob);
ApplyJobRouter.get('/get-all-applied-jobs', ApplyJobController.getAllAppliedJob);
ApplyJobRouter.get('/get-all-applied-jobs-approved/:companyId', ApplyJobController.getAllAppliedJobOfPost);


ApplyJobRouter.get('/asset/:cv/:name/:email', async function (req, res) {
    const {cv, name, email} = req.params;
    console.log(cv);
    var tempFile = cv+"/"+name;
    var stream = fs.createReadStream(tempFile);
    var filename = `${email}.pdf`;
    // Be careful of special characters

    filename = encodeURIComponent(filename);
    // Ideally this should strip them

    res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    stream.pipe(res);
});
ApplyJobRouter.post('/accept-candidate', ApplyJobController.changeApplieJobStatus);
module.exports = { ApplyJobRouter }