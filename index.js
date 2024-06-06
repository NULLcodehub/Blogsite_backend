const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const app=express()

app.use(cors());
app.use(express.json())


mongoose.connect('mongodb+srv://codeblog:0192837465@cluster0.ybcs9iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register',(req,res)=>{

    const {fullname,email,password}=req.body
    res.json({requestData:{fullname,email,password}});
})


app.listen(4000)