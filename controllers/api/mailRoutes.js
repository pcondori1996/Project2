// const nodemailer = require('nodemailer');
// const router = require('express').Router()
// require('dotenv').config()


// router.post('/', (req, res) => {
//     let transporter = nodemailer.createTransport({
//         service: 'yahoo',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     })

//     let mailOptions = {
//         from: 'wookiesgold@yahoo.com',
//         to: 'paulocondori1@gmail.com',
//         subject: 'NodemailerTest',
//         text: 'It works'
//     }

//     transporter.sendMail(mailOptions, function (err, res) {
//         if(err){
//             console.log('Error');
//         } else {
//             console.log('Email Sent');
//         }
//     })
// });


// module.exports = router

    
//     //step 1 
//         // let transporter = nodemailer.createTransport({
//         //   service: 'yahoo',
//         //   auth: {
//         //     user: process.env.EMAIL,
//         //     pass: process.env.PASSWORD
//         //   }
//         // })
        
//         // //step 2
//         // let mailOptions = {
//         //   from: 'wookiesgold@yahoo.com',
//         //   to: 'paulocondori1@gmail.com',
//         //   subject: 'Nodemailer',
//         //   text: 'It works!'
//         // };
        
//         // //Step 3
//         // transporter.sendMail(mailOptions, function(err, data) {
//         //   if (err) {
//         //     console.log('Email was not sent') 
//         //   }else{
//         //     console.log('Email was Sent')
//         //   }
//         // })
//         // // Regular ^^^^^
        
// // }) 

// // NODEMAILER & FORGOT PASSWORD FUNCIONALITY
