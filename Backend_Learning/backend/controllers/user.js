import User from "../models/user.js"; 
import bcrypt from "bcrypt";

export const signup =  async(req,res) => {
    try{
        const {username , email , password} = req.body;

        const hashpassword = await bcrypt.hash(password,10);

        const user = await User.create({username,email , password:hashpassword});
        res.status(201).json({message:"User data is stored" , user})
    }catch (error){
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}

export const login = async (req,res) => {
    try{
        const {email , password} = req.body;

        const user = await User.findOne({email});

        if(!user || !(await bcrypt.compare(password,user.password))){
            res.status(401).json({error:error.message});
        }

        res.status(201).json({message:"User login sucessfully " , user})
    }catch (error){
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}