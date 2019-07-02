const express = require('express');
const Lessons = require('./lessonsModel.js');

const router = express.Router();

// Get all lessons request
router.get('/', async (req, res) => {
  try {
    const lessons = await Lessons.find();
    if (lessons.length) {
      res.status(200).json({
        error: false,
        message: 'The lessons were found successfully.',
        lessons
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The lessons could not be found.',
        lessons: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the lessons.',
      lessons: []
    });
  }
});

// Get lesson by ID request
router.get('/:id', async (req, res) => {
  try {
    const lesson = await Lessons.findById(req.params.id);
    if (lesson) {
      res.status(200).json({
        error: false,
        message: 'The lesson was found successfully.',
        lesson
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The lesson could not be found.',
        lessons: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the lesson.',
      lesson: {}
    });
  }
});

module.exports = router;
