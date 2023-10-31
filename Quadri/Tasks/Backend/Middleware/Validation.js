function validateMiddle(Schema,type){
    return async (req,res,next)=>{
        const validationOptions= {
            abortEarly:false,
            allowUnknown:true,
            stripUnknown:true
        };

        try {

            if(type=="PARAMS"){
                const value = await Schema.validateAsync(req.params, validationOptions)
                req.params = value;
                return next();
            }
            if(type =="QUERY"){
                const value = await Schema.validateAsync(req.params, validationOptions)
                req.query = value;
                return next()
            }

            const value = await Schema.validateAsync(req.body, validationOptions)
            req.body = value;
            return next();
            
        } catch (err) {
            const errors = [];

            err.details.forEach((error)=>{
                errors.push(error.message)
            })
            res.status(400).send({errors})
                
            
            
        }
    }
}

export default validateMiddle