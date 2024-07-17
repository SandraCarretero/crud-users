const express = require('express');
const characteristicsController = require('../controllers/characteristics.controller');
const characteristicsRoutes = express.Router();

characteristicsRoutes.get('/', characteristicsController.getCharacteristics);
characteristicsRoutes.patch('/:userId', characteristicsController.updateCharacteristics);

module.exports = characteristicsRoutes;
