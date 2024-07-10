const express = require('express');
const chatController = require('../Controller/ChatController.js');

const router = express.Router();

router.post('/send-message', chatController.sendMessage);
router.get('/:userId', chatController.getMessages);

module.exports = router;
