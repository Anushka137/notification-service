const Notification = require('../models/Notification');
const queueService = require('../services/queueService');

exports.sendNotification = async (req, res) => {
  const { userId, type, message } = req.body;

  const notification = new Notification({ userId, type, message });
  await notification.save();

  await queueService.publishToQueue('notificationQueue', {
    id: notification._id,
    userId,
    type,
    message
  });

  res.status(200).json({ message: 'Notification queued' });
};

exports.getUserNotifications = async (req, res) => {
  const notifications = await Notification.find({ userId: req.params.id });
  res.status(200).json(notifications);
};
