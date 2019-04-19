const express = require('express');
const router = express.Router();

const Quiz = require('../models/quiz');


router.get('/question', (req, res)=>{
    Quiz.find()
        .then(result=>{
            res.json(result);
        })
        .catch(err=>{
            console.log(err);
        })
});



module.exports = router;