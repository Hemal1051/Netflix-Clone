import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./Utils/database.js";
import cookieParser from "cookie-parser"
import userRoute from "./Routes/userRoute.js"
import cors from 'cors'

databaseConnection();


dotenv.config({
    path:".env"
})
const app=express();


const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
}


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));



app.use("/api/v1/user",userRoute);

app.listen(process.env.PORT , ()=>{
    console.log(`server Listen At Port ${process.env.PORT}`);
});


