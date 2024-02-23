import express from "express";
import validator from "validator";
import nodemailer from "nodemailer";

const router = express.Router();

router.post('/send-email', (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    try {
        
    } catch (err) {
        console.error("Failed to send Email", err);
    }
});