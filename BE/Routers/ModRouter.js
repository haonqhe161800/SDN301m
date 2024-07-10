const express = require('express');
const createManager = require('../Controller/ModController.js').createManager;
const getManagers = require('../Controller/ModController.js').getManagers;
const updateManager = require('../Controller/ModController.js').updateManager;
const deleteManager = require('../Controller/ModController.js').deleteManager;

const router = express.Router();

router.post('/', createManager);
router.get('/', getManagers);
router.put('/:id', updateManager);
router.delete('/:id', deleteManager);

module.exports = router;