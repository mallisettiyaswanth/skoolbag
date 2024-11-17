import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  otp: string,
  name: string
) => {
  try {
    await resend.emails.send({
      from: "skoolbag@resend.dev",
      to: email,
      subject: "Verify your Skool Bag Account",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Account</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #ffffff;
              margin: 0;
              padding: 0;
              color: #000000;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border: 1px solid #2b4cdb;
              border-radius: 8px;
              overflow: hidden;
            }
            .header {
              background: #2b4cdb;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 20px;
              text-align: center;
            }
            .otp {
              font-size: 24px;
              font-weight: bold;
              color: #2b4cdb;
              margin: 20px 0;
              background-color: #f0f8ff;
              padding: 10px;
              border-radius: 4px;
              display: inline-block;
            }
            .warning {
              margin-top: 20px;
              padding: 15px;
              background-color: #ffecec;
              color: #d32f2f;
              font-size: 14px;
              font-weight: bold;
              border-radius: 4px;
              border: 1px solid #d32f2f;
              text-align: center;
            }
            .footer {
              background: #f9f9f9;
              padding: 15px;
              text-align: center;
              font-size: 14px;
              color: #666;
            }
            .content p span {
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Verify Your Skool Bag Account Email Address</h1>
            </div>
            <div class="content">
              <p>Dear <span>${name}</span>,</p>
              <p>Thank you for registering with <strong>Skool Bag</strong>. To complete your signup process, please verify your account by entering the OTP below:</p>
              <div class="otp">${otp}</div>
              <div class="warning">
                OTP expires in 5 minutes. Please complete the verification promptly.
              </div>
              <p>If you didn’t request this email, please ignore it. Your account remains secure.</p>
            </div>
            <div class="footer">
              <p>Skool Bag &copy; 2024 | All Rights Reserved</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent");
  } catch (err) {
    console.error("Verification email not sent", err);
  }
};
