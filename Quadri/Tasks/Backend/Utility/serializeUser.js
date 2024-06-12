export const serializeUser=(user)=>{
    const {_id,firstName, lastName,role,email,...rest} = user;
    return{
        _id,
        firstName,
        lastName,
        role,
        email,

    };
};