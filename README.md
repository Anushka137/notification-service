# Notification Service

This is a backend microservice built with **Node.js**, **Express**, **MongoDB**, and **RabbitMQ**. It handles user notifications such as email or SMS by storing them in a database and optionally processing them asynchronously using a message queue.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [RabbitMQ Management](#rabbitmq-management)
- [Optional: Message Consumer](#optional-message-consumer)
- [Author](#author)

---

## Features

- Create and store notifications
- Retrieve notifications for a specific user
- Queue notifications using RabbitMQ
- Support for asynchronous message processing
- Simple and RESTful API design

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **RabbitMQ**
- **Docker** (for RabbitMQ container)
- **Postman** (for testing)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/notification-service.git
cd notification-service

### 2. Install Dependencies

npm install

###3. Set Environment Variables

Create a .env file in the root directory with the following contents:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/notifications
RABBITMQ_URL=amqp://localhost
QUEUE_NAME=notifications
Make sure MongoDB is running locally or use a cloud connection string.

Running the Application

1. Start RabbitMQ via Docker
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
This will expose:

Message Broker: amqp://localhost:5672

Management UI: http://localhost:15672
(Username: guest, Password: guest)
