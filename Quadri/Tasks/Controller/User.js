import httpStatus  from "http-status";
import userModel from "../model/User.js"
import { codeGenerator } from "../Utility/UniqueCode.js";

export const createUser= async (req,res)=>{

    const {firstName, lastName, email, password, phoneNumber} = req.body
     
    try {

        const user = await userModel.create({

            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            userCode:codeGenerator(6)

        });
        res.status(httpStatus.OK).json({
            status:"success",
            payload: user
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

    