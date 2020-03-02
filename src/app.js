const express = require('express');

const app = express();
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
//注册路由
app.use('/member',memberRouter);
app.use('/sku',skuRouter);

app.listen(3000,()=>{
    console.log('服务器启动成功');
});