const amqp = require('amqplib');
const Notification = require('../models/Notification');
const { sendEmail, sendSMS } = require('../services/notificationService');
require('dotenv').config();

(async () => {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await conn.createChannel();
  await channel.assertQueue('notificationQueue');

  channel.consume('notificationQueue', async msg => {
    const data = JSON.parse(msg.content.toString());

    try {
      if (data.type === 'email') {
        await sendEmail(data.userId, data.message);
      } else if (data.type === 'sms') {
        await sendSMS(data.userId, data.message);
      }
      await Notification.findByIdAndUpdate(data.id, { status: 'sent' });
    } catch (err) {
      console.error('Error processing notification:', err);
      await Notification.findByIdAndUpdate(data.id, { status: 'failed' });
    }

    

    channel.ack(msg);
  });
})();
