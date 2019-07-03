const express = require('express');
const Sprints = require('./sprintsModel.js');
const Lessons = require('../lessons/lessonsModel.js');

const router = express.Router();

// Get all sprintsrequest
router.get('/', async (req, res) => {
  try {
    const sprints = await Sprints.find();
    if (sprints.length) {
      res.status(200).json({
        error: false,
        message: 'The sprints were found successfully.',
        sprints
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The sprints could not be found.',
        sprints: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the sprints.',
      sprints: []
    });
  }
});

// Get users by id request
router.get('/cohort/:id', async (req, res) => {
  try {
    const sprints = await Sprints.findByCohortId(req.params.id);
    const lessons = await Lessons.findByCohortId(req.params.id);
    if (sprints.length && lessons.length) {
      res.status(200).json({
        error: false,
        message: 'The sprints were found successfully.',
        sprints,
        lessons
      });
    } else {
      res
        .status(404)
        .json({ error: true, message: 'The sprints could not be found.' });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the sprints.'
    });
  }
});

module.exports = router;
