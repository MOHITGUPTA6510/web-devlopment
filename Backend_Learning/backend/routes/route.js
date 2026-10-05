import express from "express";
import { retreive , send , updation , delition} from "../controllers/controller.js";
import auth from "../middleware/auth.js"; 

const router  = express.Router();

router.get("/fetch",auth, retreive)
router.post("/send",auth, send )
router.put("/update/:id",auth, updation )
router.delete("/delete",auth, delition )

export default router;