'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    email: { type: String, require: true },
    text: { type: String, require: true },
    created_at: { type: Date, default: Date.now},
    update_at: { type: Date, default: Date.now},
});

const Message = mongoose.model('MessagesCollection', messageSchema);
module.exports = Message