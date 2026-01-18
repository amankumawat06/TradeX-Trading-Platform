const {userModel} = require("../Models/userModel")
const {createSecretToken} = require("../utils/SecretToken")
const bcrypt = require("bcryptjs")

// Signup 
exports.signup = async (req,res,next) => {
  try{
    let {email,password,username,createdAt} = req.body;
    const existingUser = await userModel.findOne({email})
    if(existingUser){
      res.json({message: "email already exist,Try different email"})
    }else{
      let newUser = new userModel({email,password,username,createdAt})
      await newUser.save()
      let token = createSecretToken(newUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.status(201).json({message:"User signed in successfully", success: true, newUser})
      // next()
    }
  }catch(err){
    console.log(err)
  }
}


// Login Route
exports.login = async (req,res) => {
  let {email,password} = req.body;
  let user = await userModel.findOne({email,})
  if(!user){
    return res.status(404).json({message: "passoword or email Incorrect"})
  }
  const auth = await bcrypt.compare(password,user.password)
  if(!auth){
    return res.status(404).json({message:'Incorrect password or email' }) 
  }
  const token = createSecretToken(user._id)
  res.cookie("token",token, {
    withCredentials:true,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  })
  res.json({message:"User Logged In successfully", success: true,user})
};