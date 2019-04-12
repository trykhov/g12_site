const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("This is port 5000");
})

app.post("/send_email", (req, res) => {
  console.log(req.body);
  res.send("we got your email");
});

app.listen(5000);
