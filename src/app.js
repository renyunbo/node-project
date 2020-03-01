const express = require('express');

const app = express();

//1.通过请求的方法类型get/post/put/delete
app.get('/demo',(req,res)=>{
    //req:请求对象
    //res:服务响应对象
    res.json({
        message:'this is a test'
    });
});
app.post('/demo',(req,res)=>{
    //req:请求对象
    //res:服务响应对象
    res.json({
        message:'this is a test'
    });
});
//2.通过URI
app.get('/user/byname',(req,res)=>{
    const {name} = req.query;
    res.json({
        name
    });
});
app.get('/user/byid',(req,res)=>{
    const {id}=req.query;
    res.json({
        id
    });
});

app.listen(3000,()=>{
    console.log('服务器启动成功');
});