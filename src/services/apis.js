const BASE_URL = "http://localhost:3000";

const USER_URL = BASE_URL + "/api/v1/user";
const LOST_ITEMS_URL = BASE_URL + "/api/v1/lost-items";

export const SEND_OTP_URL = USER_URL + "/send-otp";
export const RESEND_OTP_URL = USER_URL + "/resend-otp";
export const SIGNUP_URL = USER_URL + "/signup";
export const LOGIN_URL = USER_URL + "/login";
export const LOGOUT_URL = USER_URL + "/logout";


