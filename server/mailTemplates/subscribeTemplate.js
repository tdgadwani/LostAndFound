const subscribeTemplate = () => {
  return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Foundify Subscribe Email</title>
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
                        width: 100%;
                        max-width: 90%;
                        padding: 15px;
                        background: linear-gradient(to right, #0b032d, #24005f, #3a0080, #53009f, #6d00bd);
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        /* display: flex;
                        flex-direction: column;
                        justify-content: center; */
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
                        color: white;
                        line-height: 2;
                        text-align: center;
                    }
                    .otp {
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px 0;
                    }
                    .bottom{
                        font-size: 12px;
                        font-weight: bold;
                        color: white;
                        line-height: 1.5;
                        text-align: center;
                    }
                    .footer {
                        font-size: 16px;
                        font-weight: bold;
                        color: white;
                        text-align: center;
                        margin-top: 8px;
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
                        <p class="heading">Dear User,</p>
                        <p>Welcome to the NITP's Foundify! We're thrilled to have you on board.</p>
                        <p class="bottom">By subscribing, you'll receive weekly updates about items that have been lost and found on campus. Our aim is to help reconnect people with their lost belongings quickly and efficiently.</p>
                    </div>
                    <div class="footer">
                        <p>Thanks,<br>Team Foundify</p>
                    </div>
                </div>
            </body>
            </html>`;
};

export default subscribeTemplate;
