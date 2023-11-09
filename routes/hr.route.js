const User = require('../models/user.model');
const router = require('express').Router();
// const mongoose = require('mongoose');
// const { roles } = require('../utils/constants');


router.get('/user-details', async (req, res, next) => {
  try {
    const users = await User.find();
    res.render('user-details', { users });
  } catch (error) {
    next(error);
  }
});

router.get('/employees', async (req, res, next) => {
  try {
    const users = await User.find();
    res.render('employees', { users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
