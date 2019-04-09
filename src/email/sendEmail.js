var nodemailer = require('nodemailer');

let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'trikhov@gmail.com',
        clientId: process.env.g12_clientID_email,
        clientSecret: process.env.g12_clientSecret_email,
        refreshToken: process.env.g12_clientRefresh,
        accessToken: process.env.g12_clientToken
    }
});
// Setup mail configuration
var mailOptions = {
    from: 'trikhov@gmail.com', // sender address
    to: "tryc_khov@yahoo.com", // list of receivers
    subject: 'Test Hello World', // Subject line
    text: 'Hey just testing to see if this thing works!', // plaintext body
  };

// send mail
const sendEmail = mailOptions => {
  smtpTransport.sendMail(mailOptions, function(error, info) {
      // if (error) {
      //   console.log(error);
      //   return res.notOk({
      //     status: 'error',
      //     msg: 'Email sending failed'
      //   })
      // } else {
      //   console.log('Message %s sent: %s', info.messageId, info.response);
      //   return res.ok({
      //     status: 'ok',
      //     msg: 'Email sent'
      //   })
      // }
      smtpTransport.close();
    });
}
