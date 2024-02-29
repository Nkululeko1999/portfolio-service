import express from "express";
import validator from "validator";
import transporter from "./config.js";
import {
  messageSentTemplate,
  messageConfirmTemplate,
} from "./email.templates.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        sucess: false,
        status: 422,
        message: "Email format is not correct.",
      });
    }

    const user = process.env.NODEMAILER_USER;
    const templateClient = messageConfirmTemplate(name);
    const templateAdmin = messageSentTemplate(name, email, message, phone);

    //Send Confirmation to Client
    await transporter.sendMail({
      from: user,
      to: email,
      subject: "Message Confirmation",
      html: templateClient,
    });

    //Send confirmation to Admin
    await transporter.sendMail({
      from: email,
      to: user,
      subject: "Message From Client",
      html: templateClient,
    });

    return res.status(200).json({
      sucess: true,
      status: 200,
      message: "Email Sent. We will respond shortly.",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, status: 500, message: "Internal Server Error" });
  }
});

export default router;
