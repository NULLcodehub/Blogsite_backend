const express=require('express');
const app=express()

app.get('/test',(req,res)=>{
    res.json("server is running...");
})


app.listen(4000)