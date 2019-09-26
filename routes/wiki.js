const express = require('express');


const router = express.Router()


router.get('/' , (req , res)=>{
    res.send(`this is all the post`)
})
router.post('/' , (req , res) => {
    res.send('post # 2')
})
router.get('/' , (re, res)=>{
    res.send('post#3')
})


module.exports = {
    router
}