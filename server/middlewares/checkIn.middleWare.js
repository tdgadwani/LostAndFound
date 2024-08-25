import { Notification } from "../models/Notifications.models.js";
import { ApiError } from "../utils/ApiError.js";
import { handelUserCheckIn } from "../utils/rewardUtils.js";


const userCheckedIn = async(req,res,next) => {
    const token = req.cookies?.lastCheckedIn;
    console.log("User Check In Middelware", token);
    //Please Check the Code and logic
    if(!token)  {
        console.log("Check In Midileware : ",req.user);
        const user=req.user
        const lastCheckedIn=user.lastCheckInDate;
        const lastCheckedInDate=new Date(lastCheckedIn);
        const now=new Date();
        const lastCheckedInUTC = lastCheckedInDate.getTime();
        const nowUTC = now.getTime();
        console.log("Check IN middelware User "+ lastCheckedInDate +" : " +lastCheckedIn)

        console.log("Check In Middelware UTC Time ",now);
        
        console.log("Check In Middelware new checked in  UTC Time ",lastCheckedInUTC);
        console.log("Check In Middelware new UTC Time ",nowUTC);
        
        const differenceInMilliseconds = nowUTC - lastCheckedInUTC;   
        
        if (differenceInMilliseconds >= 1000 * 60 * 60 * 24 ) {
            // TODO: Give an Error for 
            // return res.redirect("/api/v1/reward-history/check-in");
            if(lastCheckedInUTC.getDate()!== nowUTC.getDate()){
                await handelUserCheckIn(user,Date.now());
                
                res.cookie("lastCheckedIn", Date.now(), {
                  httpOnly: true,
                  secure: true,
                  maxAge: 24 * 60 * 60 * 1000,
                  sameSite: "None",
                })
            }
            res.cookie("lastCheckedIn", Date.now(), {
                httpOnly: true,
                secure: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: "None",
            })
                
        }
    }
    next();
}; 

export {
    userCheckedIn,
};