const express=require('express');
const cors=require('cors')
const app=express()

app.use(cors());
app.use(express.json())

app.post('/register',(req,res)=>{

    const {fullname,email,password}=req.body
    res.json({requestData:{fullname,email,password}});
})


app.listen(4000)