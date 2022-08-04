const loginForm = document.getElementById('login-form')
const ResetUInfo  = document.getElementById('ResetUInfo')

const nodemailer = require('nodemailer');
require('dotenv').config()


//NODEMAILER & FORGOT PASSWORD FUNCIONALITY
const sendMail = () => {
//step 1 
let transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

//step 2
let mailOptions = {
  from: 'wookiesgold@yahoo.com',
  to: 'paulocondori1@gmail.com',
  subject: 'Nodemailer',
  text: 'It works!'
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log('Email was not sent') 
  }else{
    console.log('Email was Sent')
  }
})
// Regular ^^^^^
}
  ResetUInfo.addEventListener('submit', sendMail);

// LOGIN FUNCTIONALITY
const login = async(e) => {
  e.preventDefault()

  const username = document.getElementById('login-username').value.trim();

  const password = document.getElementById('login-password').value.trim()

  if(username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username, password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if(response.ok) {
      document.location.replace('/forum');
    } else {
      alert(response.statusText);
    }
  }
}

loginForm.addEventListener('submit', login);



