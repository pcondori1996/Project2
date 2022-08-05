require('dotenv').config();
const router = require("express").Router();
const nodemailer = require('nodemailer');


const recipient = 'Alkarias29@gmail.com';

init();

async function init() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const message = {
        from: process.env.EMAIL_USERNAME,
        to: recipient,
        subject: "Password Reset",
        text: "This is your new password: [insert password here]",
    }

    transporter.sendMail(message, (err, info) => {
        err ? console.log(err) : console.log(info);
    });
}


module.exports = router;
