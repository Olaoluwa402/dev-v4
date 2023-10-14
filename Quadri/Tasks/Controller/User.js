import httpStatus  from "http-status";

export const createUser=(req,res)=>{
    res.status(httpStatus.OK).json({
        status:"success",
        payload:"user created"
    });
};

export const getUsers=(req,res)=>{
    res.status(httpStatus.OK).json({
        status:"success",
        payload:"users",
    });
};

export const getUser=(req,res)=>{
    res.status(httpStatus.OK).json({
        status:"success",
        payload:"user",
    });
};


    export const updateUser=(req,res)=>{
        res.status(httpStatus.OK).json({
            status:"success",
            payload:"user updated"
        });
    };


    export const deleteUser=(req,res)=>{
        res.status(httpStatus.OK).json({
            status:"success",
            payload:"user deleted"
        });
    };