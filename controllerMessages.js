'use strict'

const db = require('./messageDb');

module.exports.getMessages = (req, res) => {
    db
    .getMessagesFromDb()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.getMessagesByPage = (req, res) => {
    db
    .getMessagesByPageFromDb(req.params.page)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.getMessageById = (req, res) => {
    db
    .getMessageByIdFromDb(req.params.id)
    .then (data => {
        res.json(data)
    })
    .catch((err) =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.postMessage = (req, res) => {
    db
    .postMessageToDb(req)
    .then((data) => {
      res
        .status(201)
        .json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
}