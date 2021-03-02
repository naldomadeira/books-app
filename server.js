const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// start app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(methodOverride('_method'));


//start DB
mongoose.connect('mongodb://localhost:27017/booksapp', { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });

// import all models 
requireDir('./src/models');

// set routes for /app
app.use('/app', require('./src/routes/routes'));

app.listen(3000, () => {
    console.log('server running on port 3000');
});