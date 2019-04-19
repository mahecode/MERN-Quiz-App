const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const index = require('./routes/index');

const port = process.env.PORT || 4000;


app.use(cors());
app.use('/', index);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quizApp', {useNewUrlParser: true});


if(process.env.NODE_ENV === 'production') {
    //static folder 
    app.use(express.static('client/build'));

    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, ()=> console.log(`server running on ${port}`));