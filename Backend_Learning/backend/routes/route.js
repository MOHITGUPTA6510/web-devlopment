import express from "express";

const router  = express.Router();

router.get("/greet", (res,req)=>{
    res.json({message : "welcome"})
})

export default router;