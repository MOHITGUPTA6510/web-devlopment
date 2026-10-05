export const hello = (req,res)=>{
    res.status(200).json({message:"welcome .."})
}

export const send = (req,res)=>{
    try{
        const {id,name,address} = req.body;
        console.log(id,name,address);


        res.status(200).json({message:"sending  message" , id , name , address})
    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message})
    }
}
export const updation = (req,res)=>{
    res.status(200).json({message:"updating  message"})
}

export const delition = (req,res)=>{
    res.status(200).json({message:"deleting  message"})
}