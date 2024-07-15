const db = require('../Model/index.js');
const Mod = db.Mod;

const createManager = async (req, res) => {
    try {
        const manager = await Mod.create(req.body);
        res.status(201).json({
            result: 'SUCCESS',
            message: 'Manager created successfully',
            data: manager
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getManagers = async (req, res) => {
    try {
        const managers = await Mod.find().exec();
        res.json({
            result: 'SUCCESS',
            message: 'List of managers',
            data: managers
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateManager = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedManager = await Mod.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedManager);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteManager = async (req, res) => {
    try {
        const { id } = req.params;
        await Mod.findByIdAndDelete(id);
        res.json({ message: 'Manager deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createManager, getManagers, updateManager, deleteManager }