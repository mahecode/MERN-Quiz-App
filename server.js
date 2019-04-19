const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const index = require('./routes/index');

const port = 4000 || process.env.PORT;


app.use(cors());
app.use('/', index);

mongoose.connect('mongodb://localhost:27017/quizApp', {useNewUrlParser: true});




app.listen(port, ()=> console.log(`server running on ${port}`));