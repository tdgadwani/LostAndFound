import Logo from "../../src/assets/LogoMain.svg"

const otpTemp = (name,otp) => {
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
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background: linear-gradient(to bottom right, #ffffff, #fcdedc);
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .logo {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .logo img {
                        max-width: 100px;
                    }
                    .content {
                        font-size: 16px;
                        color: #333;
                        line-height: 1.5;
                    }
                    .otp {
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 20px 0;
                    }
                    .footer {
                        font-size: 12px;
                        color: #999;
                        text-align: center;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="logo">
                        <img src="${Logo}" alt="Foundify Logo">
                    </div>
                    <div class="content">
                        <p>Hi ${name},</p>
                        <p>To complete your sign-in, please use the following One-Time Password (OTP):</p>
                        <p class="otp">${otp}</p>
                        <p>*This OTP is valid for the next 10 minutes. Do not share this code with anyone.<br>
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

export default otpTemp ;