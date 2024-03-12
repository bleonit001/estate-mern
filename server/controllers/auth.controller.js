import User from "../Models/usermodel.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) =>{

const {username,email,password} = req.body;
const hashedPassword =bcryptjs.hashSync(password, 10);
const newUser = new User({username ,email,password: hashedPassword});
 

 try{
    await newUser.save();
    res.status(201).json('User created sucessfully!');

 }catch(erorr){
    res.status(500).json(erorr.message);

 }
res.status(201).json('user created successfully!');


}