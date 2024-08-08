import { User } from "../Models/UserModel.js";
import bcryptjs from 'bcryptjs'
import jwtToken from 'jsonwebtoken'



export const Login = async(req,res)=>{
try {
        const {email,password} =req.body;

        if(!email || !password){
            res.status(401).json({
                message:"Invalid Data",
                success : false
            })
        };
        const user=await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message:"Invalid Email or password",
                success:false
            });
        }
        const tokenData ={
            id:user._id
        }
        const isMatch =await bcryptjs.compare(password,user.password);

        if(!isMatch){
            res.status(401).json({
                message:"Invalid Email or Password",
                success:false
            })
        }

        const token=await jwtToken.sign(tokenData,"seuifyvieufioufiouer",{expiresIn:"1d"});
    return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`Welcome Back ${user.name}`,
        user,
        success:true
    });


} catch (error) {
    console.log(error);
}
}

export const Logout = async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"Succesfully logout",
        success:true
    })
}

 export const Register= async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password ){
            return res.status(400).json({
                message:"Invalid Data",
                success: false
            })
        }

        const user= await User.findOne({email});

        if(user){
            return res.status(401).json({
                message:"This Email is Already Use",
                success: false
            })
        }

const hashedPassword = await bcryptjs.hash(password,16);

        await User.create({
            name,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account Created successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}