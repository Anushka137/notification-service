const amqp = require('amqplib');

let channel;

async function connect() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue('notificationQueue');
}

async function publishToQueue(queue, data) {
  if (!channel) await connect();
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
}

module.exports = { publishToQueue };
