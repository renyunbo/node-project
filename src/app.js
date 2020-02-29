const express =require('express');

//是一个express实例
const app = express();
// app.use((req,res)=>{
//     res.json({
//         'name':'张三'
//     });
// });

app.get('/name/:age',(req,res)=>{
    const {age} = req.params;//获取URL参数

    res.json({
        age:age,
        name:'tom'
    });
});

app.post('/name',(req,res)=>{
    res.send('tom post');
});
app.listen(3000,()=>{
    console.log('server 启动成功');
});