import User from "../models/user.js"; 

export const signup =  async(req,res) => {
    try{
        const {username , email , password} = req.body;

        const user = await User.create({username,email,password});
        res.status(201).json({message:"User data is stored" , user})
    }catch (error){
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}

export const login =  (req,res) => {
    console.log("login ...");
}