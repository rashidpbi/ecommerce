import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import validator from "validator"
 import bcrypt from 'bcrypt'


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY,)
}

 const loginUser = async (req,res)=>{


 }

 const registerUser = async(req,res)=>{
try{
    //check if user exists already
    const {name,email ,password } = req.body
    const exists  = await userModel.findOne({email})
    if(exists){
        return    res.json({success:false,message:"user already exists"})


    }

    //validating email format. //strong passwrod

 if(!validator.isEmail(email)){
    return    res.json({success:false,message:"please enter a valid email"})


 }
 if(password.length < 8 ){
    return    res.json({success:false,message:"please enter a strong password"})


 }

 //hashing user password
 const salt = await bcrypt.genSalt(10)
 const hashedPassword = await bcrypt.hash(password,salt)

 const newUser = new userModel({
    name,
    email,
    password:hashedPassword
 })

 const user = await newUser.save()


const token = createToken(user._id)

return res.json({success:true,token})

  
}catch(err){
console.log(err)
res.json({success:false,message:err.message})
}
 }


 const adminLogin = async (req,res)=>{


 }
 export {loginUser,registerUser,adminLogin}