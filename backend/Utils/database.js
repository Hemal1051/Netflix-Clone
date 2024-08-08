import mongoose from "mongoose"
import dotenv from "dotenv"



dotenv.config({
  path : './.env'
})

 const databaseConnection = ()=>{

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Database Comnected");
}).catch((error)=>{
  console.log(error)});

 };

 export default databaseConnection;

