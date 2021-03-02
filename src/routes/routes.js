const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.get('/books', BookController.index);

router.get('/books/:id', BookController.show);

router.post('/books', BookController.store);

router.put('/books/:id', BookController.update);

router.delete('/books/:id', BookController.destroy);

module.exports = router;