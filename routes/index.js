const express = require('express'); 
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

//pass ensureAuthenticated as second parameter or user wont need to be authenticated goofball!!
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  }) 
);

module.exports = router;