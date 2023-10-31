import httpStatus  from "http-status";
import userModel from "../model/User.js"
import { codeGenerator } from "../Utility/UniqueCode.js";
import {serializeUser} from "../Utility/serializeUser.js"
import { generateToken } from "../Utility/jwt-token.js";
import bcryptjs from "bcryptjs"


 export const userLogin = async (req,res)=>{

    const {email, password} = req.body

    try {
        const userExist= await userModel.findOne({email: email})
        console.log(userExist,"exist")
        if(!userExist){
            res.status(httpStatus.NOT_FOUND).json({
                status:"error",
                payload:"User does not exist, please register"
            })
            return
        }

        const decodePassword = await bcryptjs.compare(password, userExist.password)
        if(!decodePassword){
            res.status(httpStatus.FORBIDDEN).json({
                status:"error",
                payload: "credentials does not match "
               
            })
            return

        }

        res.status(httpStatus.OK).json({
            status:"success",
            payload: serializeUser(userExist),
            token: generateToken(userExist._id, userExist.email)
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:error.message
        })
        
    }

}

export const createUser= async (req,res)=>{

    const {firstName, lastName, email, password, phoneNumber} = req.body
     
    try {

        const userExist = await userModel.findOne({email : email})
        if(userExist){
            res.status(httpStatus.CONFLICT).json({
                status:"error",
                payload:"User with the email already exists"
            })
            return
        }

        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(password,saltRounds)
        const user = await userModel.create({

            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword,
            phoneNumber:phoneNumber,
            role:"admin",
            userCode:codeGenerator(6)

        });
        res.status(httpStatus.OK).json({
            status:"success",
            payload: serializeUser(user)
        });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:err.message,
        })
    }
   
};

export const getUsers= async (req,res)=>{
    try {

        const users = await userModel.find({})
        res.status(httpStatus.OK).json({
            status:"success",
            payload:users,
        });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:err.message
        })
        
    }
};

export const getUser= async(req,res)=>{

    const {id} = req.params
   try {

    const user = await userModel.findById({_id:id})
    if(!user){
        res.status(httpStatus.NOT_FOUND).json({
            status:"error",
            payload:"user not found"
        })
        return
    }

    res.status(httpStatus.OK).json({
        status:"success",
        payload:user,
    });
    
   } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
        status:"error",
        payload:err.message
    })
   }
};


    export const updateUser= async(req,res)=>{

        const {id} = req.params
        const data = req.body

        try {

            const user = await userModel.findById({_id:id})
            if(!user){
                res.status(httpStatus.NOT_FOUND).json({
                    status:"error",
                    payload:"user not found"
                })
                return
            }

            const updatedUser = await userModel.findOneAndUpdate({_id:id},data,{new:true});
            res.status(httpStatus.OK).json({
                status:"success",
                payload: updatedUser
            });
            
        } catch (err) {
            res.status(httpStatus.BAD_REQUEST).json({
                status:"error",
                payload: err.message
            })
            
        }
       
    };


    export const deleteUser= async (req,res)=>{
        const{id}=req.params;
        
        try {

            const user = await userModel.findById({_id:id})
            if(!user){
                res.status(httpStatus.NOT_FOUND).json({
                    status:"error",
                    payload:"user not found"
                });
                return
            }

             await userModel.findByIdAndDelete({_id:id})
             res.status(httpStatus.OK).json({
                status:"success",
                payload:"user deleted"
            });

        } catch (err) {
            res.status(httpStatus.BAD_REQUEST).json({
                status:"error",
                payload:err.message
            });
            
        };
        
    };

    