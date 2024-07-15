const express = require('express');
const bodyParser = require('body-parser');
const createManager = require('../Controller/Mod.controller').createManager;
const getManagers = require('../Controller/Mod.controller').getManagers;
const updateManager = require('../Controller/Mod.controller').updateManager;
const deleteManager = require('../Controller/Mod.controller').deleteManager;

const modRouter = express.Router();
modRouter.use(bodyParser.json());

modRouter.post('/', createManager);
modRouter.get('/', getManagers);
modRouter.put('/:id', updateManager);
modRouter.delete('/:id', deleteManager);

module.exports = modRouter;