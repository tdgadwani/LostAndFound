// import Logo from "../../src/assets/LogoMain.svg"

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
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .email-container {
            width: 100%;
             max-width: 235px;
            padding: 15px;
            background: linear-gradient(to bottom, white, #fdba74);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%; /* Full height */
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
            color: #333;
            line-height: 1.5;
            text-align: center;
        }
        .res_button {
            background-color: rgb(219, 43, 43);
            color: white;
            font-size: 12px;
            font-weight: bold;
            padding: 5px 10px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            margin: 4px 0;
            transition: background-color 0.3s ease;
        }
        .res_button:hover {
            background-color: darkred;
        }
        .footer {
            font-size: 16px;
            font-weight: bold;
            color: #5f5e5e;
            text-align: center;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo">
            <img src="https://res.cloudinary.com/dlgrwtkck/image/upload/v1720550354/dla8f3ol18a5agsekawy.svg" alt="Foundify Logo">
            // <img src=${Logo} alt="Foundify Logo">
        </div>
        <div class="content">
            <p class="heading">Hi ${name},</p>
            <p>It seems you requested a password reset. Please click the below to reset your password : </p>
            <button type="button" class="res_button" onclick="window.location.href='${url}'">Reset Password</button>
            <p>If you did not request for password reset, please ignore this email or contact our support team .</p>
        </div>
        <div class="footer">
            <p>Thanks,<br>Team Foundify</p>
        </div>
    </div>
</body>
</html>
        `
    ;
};

export default ResetTemp ;
