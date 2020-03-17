const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    let {username,password} = req.query;
    if(!username || !password){
        res.json({
            message:'请输入正确的账号和密码！'
        });
    }else{

    }
   
});

module.exports = router;