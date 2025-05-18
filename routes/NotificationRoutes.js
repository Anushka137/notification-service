const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/', notificationController.sendNotification);
router.get('/user/:id', notificationController.getUserNotifications);

module.exports = router;
