const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./auth");
const request = require("request");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.api);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

app.use(express.static(path.join(__dirname, 'client','build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
});



app.post("/send_email", (req, res) => {

  const text = "Name: " + req.body.name + "\n Email: " + req.body.email + "\n Phone: " + req.body.phone +
               "\n Pick Up Location: " + req.body.pick + "\n Drop Off Location: " + req.body.drop + "\n Weight (lb): " +
               req.body.weight + "\n Any Fluids: " + req.body.van;

  const msgToG12 = {
    to: keys.to,
    from: keys.from,
    subject: 'Requesting Service for ' + req.body.name ,
    text: text,
  };

  sgMail.send(msgToG12);
  res.redirect('/confirm');
});

if(process.env.TARGET === "now") {
  module.exports = app;
} else {
  app.set("port", process.env.PORT || 5000);
  app.listen(app.get("port"), () => console.log(`listening on port ${app.get("port")}`));
}


// const port = process.env.PORT || 5000
// app.listen(port);
