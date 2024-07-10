const express = require('express');
const PaymentController = require('../Controller/PaymentController.js');

const router = express.Router();

router.post('/create_payment_url', (req, res, next) => PaymentController.createPaymentURL(req, res, next));
router.get('/vnpay_return', (req, res, next) => PaymentController.vnPayReturn(req, res, next));

module.exports = router;
