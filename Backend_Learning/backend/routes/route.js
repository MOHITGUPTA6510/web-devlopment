import express from "express";
import {hello} from "../controllers/controller.js";
import auth from "../middleware/auth.js"; 

const router  = express.Router();

router.get("/greet",auth, hello)

export default router;