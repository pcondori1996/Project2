require('dotenv').config();
const router = require("express").Router();
const nodemailer = require('nodemailer');
const { User } = require('../../models');

// creates a transporter that is used to deliver emails
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

router.put('/', async(req, res) => {
    try {
        const pw = newPassword();
        console.info(pw);
        await User.update(
        {
            password: pw,
        },
        {
            where: {
                email: req.body.email
            },
            individualHooks:true,
        });
        sendEmail(req.body.email, pw);
        res.status(200).json();
    } catch(err) {
        res.status(500).json(err);
    }
})

async function sendEmail(recipient, newPassword) {
    const message = {
        from: process.env.EMAIL_USERNAME,
        to: recipient,
        subject: "Password Reset",
        text: `This is your new password: ${newPassword}`,
    }

    transporter.sendMail(message, (err, info) => {
        err ? console.log(err) : console.log(info);
    });
}

function newPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVQXYZ1234567890!@#$&()-'./+,";
    const arrChars = chars.split('');
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += arrChars[Math.floor(Math.random()*arrChars.length)];
    }
    return password;
}

module.exports = router;
