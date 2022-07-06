var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'
    });
})

router.post('/', function (req,res,next){
    
    try{
        console.log(req.body);



    }catch(error){
        console.log(error)
    }


})

module.exports = router;