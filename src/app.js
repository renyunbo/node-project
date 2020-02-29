const express = require('express');
const app = express();

app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        name: 'tom',
        age
    });
});

app.post('/name', (req, res) => {
    res.send('post tom');
});

app.use((req,res)=>{
    res.json({
        message:'demo',
        method:req.method,
        uri:req.path
    });
});
app.listen(8888, () => {
    console.log(11111);
});