const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./auth");
const request = require("request");
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is port 5000");
});


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: keys
});


app.post("/send_email", (req, res) => {
  var mailOptions = {
    from: req.body.email,
    to: keys.user,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  console.log(req.body);
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });

  res.send("info sent");
});

app.listen(5000);
