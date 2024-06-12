const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');

const bcrypt=require('bcrypt')

const User=require('./models/User_model')

const app=express()

const salt=bcrypt.genSaltSync(10)
const sceret='jsdsdljsljldsodsjnolsdnos'
 const jwt=require('jsonwebtoken')

app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json())


mongoose.connect('mongodb+srv://codeblog:0192837465@cluster0.ybcs9iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register',async (req,res)=>{

    const {fullname,email,password}=req.body




    try{

        const userDoc=await User.create({
            fullname,
            email,
            password:bcrypt.hashSync(password,salt)
        })
        
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e)
        
    }   
    
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const userDoc=await User.findOne({email})
    const passOK=bcrypt.compareSync(password,userDoc.password)

    // res.json(passOK)

    if (passOK){
        // login
        jwt.sign({email,id:userDoc._id},sceret,{},(err,token)=>{
            if (err) throw err;
            res.cookie('token',token).json('ok')
        })
    }else{
        res.status(400).json("wrong password")
    }

})


app.listen(4000)