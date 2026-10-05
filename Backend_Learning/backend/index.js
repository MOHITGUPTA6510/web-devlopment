import express from "express";
import dotenv from "dotenv";
import routes from "./routes/route.js";
import user from  "./routes/user.js";
import {connectDB} from "./database/db.js";

const app = express();



dotenv.config();

// database
connectDB();


// routing
app.use(express.json());
app.use("/api",routes);
app.use("/api",user);

const PORT = process.env.PORT;

app.listen(PORT , () => {
    console.log("Server is running ...");
})
