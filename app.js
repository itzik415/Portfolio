const express = require('express');
const bodyParser = require('body-parser');
var cons = require('consolidate');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Static folder
app.use('/resources/css', express.static(path.join(__dirname, 'resources/css')));
app.use('/resources/js', express.static(path.join(__dirname, 'resources/js')));
// app.use(express.static(__dirname + '/public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'issacshaouli@gmail.com', // generated ethereal user
        pass: 'isaac615243?'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Contact information: " <issacshaouli@gmail.com>', // sender address
      to: 'itzikshaoulian@gmail.com', // list of receivers
      subject: 'From my personal portfolio', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('index');
  });
  });

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);