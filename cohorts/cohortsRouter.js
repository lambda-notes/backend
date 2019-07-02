const express = require('express');
const Cohorts = require('./cohortsModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cohorts = await Cohorts.find();
    if (cohorts.length) {
      res
        .status(200)
        .json({
          error: false,
          message: 'The cohorts were found successfully.',
          cohorts
        });
    } else {
      res.status(404).status({
        error: true,
        message: 'The cohorts could not be found.',
        cohorts: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the cohorts.',
      cohorts: []
    });
  }
});

module.exports = router;
