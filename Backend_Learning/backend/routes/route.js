import express from "express";
import {hello} from "../controllers/controller.js"

const router  = express.Router();

router.get("/greet" , hello)

export default router;