const express = require('express');

const app = express();

app.get('/demo',(req,res)=>{
    throw new Error('测试异常');

    // res.json({
    //     'message':1111
    // });
});

function error_handler_middleware(err,req,res,next){
    if(err){
        res.status(500)
        .json({
            message:'服务器异常'
        })
    }else{

    }
}
//处理页面不存在
function not_found_handler(req,res,next){
    res.json({
        message:'api不存在'
    })
}

app.use(not_found_handler);
app.use(error_handler_middleware);
app.listen(3000,()=>{
    console.log('服务器启动成功！');
});