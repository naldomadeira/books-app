const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Book', BookSchema);