import express from "express";
import {hello , send , updation , delition} from "../controllers/controller.js";
import auth from "../middleware/auth.js"; 

const router  = express.Router();

router.get("/fetch",auth, hello)
router.post("/send",auth, send )
router.put("/update",auth, updation )
router.delete("/delete",auth, delition )

export default router;