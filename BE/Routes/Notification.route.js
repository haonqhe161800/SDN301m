const express = require('express');
const bodyParser = require('body-parser');
const notificationController = require('../Controller/Notification.controller');

const NotificationRouter = express.Router();
NotificationRouter.use(bodyParser.json());

NotificationRouter.get('/', notificationController.getNotifications);
NotificationRouter.get('/:recipientId', notificationController.getNotifications);
NotificationRouter.post('/create-notification', notificationController.createNotification);

module.exports = NotificationRouter;
