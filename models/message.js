const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})
const Message = mongoose.model('message', messageSchema)

module.exports = Message;