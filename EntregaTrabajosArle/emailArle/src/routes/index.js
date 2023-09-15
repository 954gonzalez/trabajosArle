const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
       
         service:'gmail',
       
         auth: {
             user: 'ejemploeje963@gmail.com',
             pass: ''
         },
         tls: {
             rejectUnauthorized: false
         }
     });
 
     let info = await transporter.sendMail({
         from: '"FaztTech Server" <ejemploeje963@gmail.com>', 
         to: 'ejemploeje963@gmail.com',
         subject: 'Website Contact Form',
      
         html: contentHTML
     })
 
     console.log('Message sent: %s', info.messageId);


     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

 
     res.redirect('/success.html');
 });
 
 module.exports = router;
 