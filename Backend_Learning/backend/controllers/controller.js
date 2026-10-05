import Todo from "../models/todo.js"

export const retreive = async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json({message: "todos..." , todos})
    }catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message})
    }
}

export const send = async(req,res)=>{
    try{
        const {title,description} = req.body;

        const todo = await Todo.create({title,description});
        res.status(201).json({message: "Todo stored" , todo})
    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message})
    }
}
export const updation =async(req,res) => {
    try{
        const {id} = req.params;
        const {title , description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            id,
            {title , description},
            {new:true}
        )

        res.status(201).json({message: "Todo updated" , todo})
    }catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message})
    }
}

export const delition = (req,res)=>{
    res.status(200).json({message:"deleting  message"})
}