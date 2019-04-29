const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./auth");
const request = require("request");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.api);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is port 5000");
});


app.post("/send_email", (req, res) => {

  const text = "Name: " + req.body.name + "\n Email: " + req.body.email + "\n Phone: " + req.body.phone +
               "\n Pick Up Location: " + req.body.pick + "\n Drop Off Location: " + req.body.drop + "\n Weight (lb): " +
               req.body.weight + "\n Any Fluids: " + req.body.van;

  const msg = {
    to: '',
    from: '',
    subject: 'Requesting Service for ' + req.body.name ,
    text: text,
  };

  sgMail.send(msg);
  res.redirect('/confirm');
});

const port = process.env.PORT || 80
app.listen(port);
