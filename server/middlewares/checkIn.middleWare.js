import { ApiError } from "../utils/ApiError.js";


const userCheckedIn = async(req,res) => {
    const token = req.cookies?.lastCheckedIn;
    if(!token)
        throw new ApiError(403,"Invalid Token");
    const cookieExpiration = new Date(req.cookies[cookieName].expiration);
    if (cookieExpiration < new Date()) {
        res.redirect("/api/v1/reward-history/check-in");
    }
    next();
}; 

export {
    userCheckedIn,
};