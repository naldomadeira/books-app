const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = {
    async index(req, res) {
        const books = await Book.find();

        return res.render('index', {books: books});
    },
    
    async show(req, res) {
        const book = await Book.findById(req.params.id);

        return res.render('show', {book: book});
    },

    async store(req, res) {
        const book = await Book.create(req.body);

        return res.redirect('/app/books');
    },

    async update(req, res) {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.redirect('/app/books/');
    },

    async destroy(req, res) {
        await Book.findByIdAndRemove(req.params.id);
        
        return res.redirect('/app/books/');
    }

}