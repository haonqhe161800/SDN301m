const express = require('express');
const bodyParser = require('body-parser');
const chatController = require('../Controller/Chat.controller');

const chatRouter = express.Router();
chatRouter.use(bodyParser.json());

chatRouter.post('/send-message', chatController.sendMessage);
chatRouter.get('/:userId', chatController.getMessages);

module.exports = chatRouter;
