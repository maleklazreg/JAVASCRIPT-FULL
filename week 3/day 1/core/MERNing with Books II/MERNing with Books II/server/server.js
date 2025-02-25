import express from "express";
import dotenv from "dotenv"
import bookRouter from "./routes/book.route.js";
import connectToDB from "./config/mongoose.config.js";
import cors from "cors"
const app = express();
const {PORT} = process.env;
connectToDB()
dotenv.config()
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"]
}))
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.url} ${req.method} ${new Date().toLocaleDateString()}`);
    next()
})







app.use("/book",bookRouter)
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));