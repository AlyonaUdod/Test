'use strict'

const Message = require('./messageSchema');
const { validationResult } = require('express-validator/check');

module.exports.getMessagesFromDb = function(page){
    return Message.find()
}

module.exports.getMessagesByPageFromDb = function(page){
    let num = page-1
    return Message.find().skip(num*10).limit(10)
}

module.exports.getMessageByIdFromDb = function(id) {
    return Message.findById(id);
}

module.exports.postMessageToDb = function(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed!');
      error.statusCode = 422;
      throw error;
    }
    const { email, text } = req.body;
    const newMessage = new Message({
      email: email,
      text: text,
    });
    return newMessage.save()
  };