import { ApiError } from "../utils/ApiError.js";


const userCheckedIn = async(req,res,next) => {
    const token = req.cookies?.lastCheckedIn;
    console.log("tgadwani ", token);
    if(!token)
        throw new ApiError(403,"Invalid Token");
    const cookieExpiration = new Date(token?.expiration);
    console.log("tgadwani cookieExpiration", cookieExpiration);    //? Have to fix the code cookieExpiration = Invalid date
    if (cookieExpiration < new Date()) {
        res.redirect("/api/v1/reward-history/check-in");     //**Have ask how it works */
    }
    next();
}; 

export {
    userCheckedIn,
};