const express = require('express');
const bodyParser = require('body-parser');
const PaymentController = require('../Controller/Payment.controller');

const paymentRouter = express.Router();
paymentRouter.use(bodyParser.json());

paymentRouter.post('/create_payment_url', (req, res, next) => PaymentController.createPaymentURL(req, res, next));
paymentRouter.get('/vnpay_return', (req, res, next) => PaymentController.vnPayReturn(req, res, next));

module.exports = paymentRouter;
