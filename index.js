const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');

const User=require('./models/User_model')

const app=express()

app.use(cors());
app.use(express.json())


mongoose.connect('mongodb+srv://codeblog:0192837465@cluster0.ybcs9iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register',async (req,res)=>{

    const {fullname,email,password}=req.body
    try{
        const userDoc=await User.create({fullname,email,password})
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e)
    }
    
})


app.listen(4000)