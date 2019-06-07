const express = require('express');
const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

router.get('/json', (req, res) => {
  var cors = require('cors');
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.use(cors({origin: 'http://localhost:3000'}));
  res.header( 'Access-Control-Allow-Origin', 'https://localhost:3000' )
  res.header('Origin', 'https://localhost:3000')
  console.log(req.body);
  res.header('mode', 'no-cors')
  res.header('Content-Type', 'application/x-www-form-urlencoded')
  res.json({message: "make-it-work"});
});

router.post('/', (req, res) => {
    [
    body('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
  res.render('form', { title: 'Registration form' });
});


module.exports = router;
