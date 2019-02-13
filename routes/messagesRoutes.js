'use strict'

const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const ctrlMessages = require('../controllers/controllerMessages');

router.get('/', ctrlMessages.getMessages)

router.get('/list/:page', ctrlMessages.getMessagesByPage);

router.get('/single/:id', ctrlMessages.getMessageById);

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
