import Logo from "../../src/assets/LogoMain.svg"

const OtpTemp = (name,otp) => {
    return
          `<!DOCTYPE html>
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
                        max-width: 400px;
                        padding: 20px;
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
                        margin-bottom: 20px;
                    }
                    .logo img {
                        width: 250px;
                    }
                    .heading {
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                    }
                    .content {
                        font-size: 16px;
                        font-weight: bold;
                        color: #333;
                        line-height: 1.5;
                        text-align: center;
                    }
                    .otp {
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 20px 0;
                    }
                    .footer {
                        font-size: 24px;
                        font-weight: bold;
                        color: #5f5e5e;
                        text-align: center;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="logo">
                        <img src="https://res.cloudinary.com/dlgrwtkck/image/upload/v1720550354/dla8f3ol18a5agsekawy.svg" alt="Foundify Logo">
                    </div>
                    <div class="content">
                        <p class="heading">Hi ${name},</p>
                        <p>To complete your sign-in, please use the following One-Time Password (OTP):</p>
                        <p class="otp">[ ${otp} ]</p>
                        <p>This OTP is valid for the next <span style="color: red; font-weight: bold; font-size: 24px;">5</span> minutes. Do not share this code with anyone.
                        If you did not request this code, please ignore this email or contact our support team immediately.</p>
                    </div>
                    <div class="footer">
                        <p>Thanks,<br>Team Foundify</p>
                    </div>
                </div>
            </body>
            </html>`
    ;
};

export default OtpTemp ;