const ResetTemp = (name,url) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundify OTP Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #0b032d, #24005f, #3a0080, #53009f, #6d00bd);
            margin: 0;
            padding: 0;
            height: 100vh;
            /* display: flex;
            justify-content: center;
            align-items: center; */
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        .email-container { 
            max-width: 90%;
            margin:  0 auto;
            padding: 15px;
            background: linear-gradient(to right, #0b032d, #24005f, #3a0080, #53009f, #6d00bd);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            /* display: flex;
            justify-content: center;
            align-items: center; */
            height: 100%; /* Full height */
            box-sizing: border-box;
            position: relative;
        }
        .logo {
            text-align: center;
            margin-bottom: 15px;
        }
        .logo img {
            width: 150px;
        }
        .heading {
            font-size: 16px;
            font-weight: bold;
            text-align: center;
        }
        .content {
            font-size: 12px;
            font-weight: bold;
            color: white;
            line-height: 3;
            text-align: center;
        }
        .ii a[href] {
            color: #ffffff !important;
        }
        .res_button {
            background-color: black;
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 10px 10px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            margin-top: 100px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .res_button:hover {
            background-color: black;
        }
        .footer {
            font-size: 16px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin-top: 10px;
        }
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100%; /* Full width on smaller screens */
                padding: 10px; /* Less padding for mobile */
                border-radius: 0; /* Removes rounded corners on mobile */
                box-shadow: none; /* Removes shadow on mobile for simplicity */
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo">
            <img src="https://res.cloudinary.com/dlgrwtkck/image/upload/v1720550354/dla8f3ol18a5agsekawy.png" alt="Foundify Logo">
        </div>
        <div class="content">
            <p class="heading">Hi ${name},</p>
            <p>It seems you requested a password reset. Please click the below to reset your password : </p>
            <a class="res_button" href='${url}' style="color:#ffffff;">Reset Password</a>
            <p>If you did not request for password reset, please ignore this email or contact our support team .</p>
        </div>
        <div class="footer">
            <p>Thanks,<br>Team Foundify</p>
        </div>
    </div>
</body>
</html>
       `;
};

export default ResetTemp ;