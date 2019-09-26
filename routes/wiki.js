const express = require('express');
const { Page } = require('../models');
const { addPage } = require ('../views');

const router = express.Router()
router.use(express.urlencoded({extended : false}));


router.get('/' , (req , res)=>{
    res.send('post #1');
})
router.post('/' , async (req , res, next) => {
    let status;

    const page = new Page({
        title: req.body.title,
        content: req.body.content
    })

    if(req.body.status == 'open'){
        //status is open
        status = 'open';
    } else {
        //status is closed
        status = 'closed';
    }

    try {
        await page.save();
        res.redirect('/');

    } catch (error){
        next(error);
    }


    console.log("Status is ", status);
    res.send(req.body)
})
router.get('/add' , (re, res)=>{
    res.send(addPage());
})


module.exports = router

///wiki/  web.com/wiki/ <=  web.com/
