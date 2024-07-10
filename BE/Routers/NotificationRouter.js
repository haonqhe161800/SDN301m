const express = require('express');
const notificationController = require('../Controller/NotificationController.js');

const router = express.Router();
router.get('/', notificationController.getNotifications);
router.get('/:recipientId', notificationController.getNotifications);
router.post('/create-notification', notificationController.createNotification);

module.exports = router;
