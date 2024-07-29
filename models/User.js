const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    chatId: String,
    currentPuzzle: [Number],
    solution: [Number],
    progress: [Number]
});

module.exports = mongoose.model('User', UserSchema);
