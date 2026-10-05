import express from "express";
import dotenv from "dotenv";
import routes from "./routes/route.js";

const app = express();



dotenv.config();

// routing
app.use(express.json());
app.use("/api",routes);

const PORT = process.env.PORT;

app.listen(PORT , () => {
    console.log("Server is running ...");
})
