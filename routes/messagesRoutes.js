const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const ctrlMessages = require('../controllers/controllerMessages');

router.get('/messages', ctrlMessages.getMessages)

router.get('/messages/list/:page', ctrlMessages.getMessagesByPage);

router.get('/messages/single/:id', ctrlMessages.getMessageById);

router.post('/messages',  [
    body('email')
        .trim()
        .isEmail(),
    body('text')
        .trim()
        .isLength({ min: 1, max: 99 })
    ],
  ctrlMessages.postMessage);

module.exports = router;
