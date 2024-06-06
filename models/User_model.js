const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    fullname:{type:String,required: true,min:4,unique: true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

const userModel=mongoose.model('User',userSchema)

module.exports=userModel;