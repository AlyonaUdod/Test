'use strict'

const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const ctrlMessages = require('./controllerMessages');

router.get('/', ctrlMessages.getMessages)

router.get('/list/:page', ctrlMessages.getMessagesByPage);

router.get('/single/:id', ctrlMessages.getMessageById);

router.post('/',  [
    body('email')
        .trim()
        .isEmail(),
    body('text')
        .trim()
        .isLength({ min: 1, max: 100 })
    ],
  ctrlMessages.postMessage);

module.exports = router;
