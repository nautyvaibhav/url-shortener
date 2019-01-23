var express=require('express');
var router = express.Router();

let URLs= require('../models/URLs')
let dns=require('dns');



router.get('/home',(req,res)=>{

  
    
    res.render('home');


});


router.post('/home',(req,res)=>{

var url=req.body.input;

URLs.find({'url':url},(err,obj)=>{
    console.log(err)
    console.log(obj[0].id);
    res.render('F:/codes/projects/url-shortener/routes/test.ejs',{person:obj[0].id})
});

})

module.exports = router
