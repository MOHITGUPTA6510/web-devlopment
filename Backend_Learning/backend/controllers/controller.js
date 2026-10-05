export const hello = (req,res)=>{
    res.status(200).json({message:"welcome .."})
}

export const send = (req,res)=>{
    res.status(200).json({message:"sending  message"})
}
export const updation = (req,res)=>{
    res.status(200).json({message:"updating  message"})
}

export const delition = (req,res)=>{
    res.status(200).json({message:"deleting  message"})
}