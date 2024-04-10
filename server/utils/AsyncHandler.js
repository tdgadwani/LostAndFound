const AsyncHandler = (requestHandler) => { return async(req,res,next)=>{
    try {
        await requestHandler(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
    }
 }
}

export { AsyncHandler};