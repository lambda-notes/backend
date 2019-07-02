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

router.post('/', async (req, res) => {
  if (
    !req.body.lessonName ||
    !req.body.lessonsCohortID ||
    !req.body.lessonsTrackID
  ) {
    res.status(500).json({
      error: true,
      message: 'Please include the required information and try again.'
    });
  }
  try {
    const createLesson = await Lessons.insert(req.body);
    if (createLesson) {
      const lesson = await Lessons.findById(createLesson);
      res.status(200).json({
        error: false,
        message: 'The lesson was created successfully.',
        lesson
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The lesson could not be created.',
        lesson: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error creating the lesson.',
      lesson: {}
    });
  }
});

// Update lesson by ID request
router.put('/:id', async (req, res) => {
  if (!req.body) {
    return res.status(500).json({
      error: true,
      message: 'Please include information to update and try again.',
      lesson: {}
    });
  }
  try {
    console.log('Working!');
    const lesson = await Lessons.update(req.body, req.params.id);
    if (lesson) {
      const updatedLesson = await Lessons.findById(req.params.id);
      res.status(200).json({
        error: false,
        message: 'The lesson was updated successfully.',
        updatedLesson
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The lesson could not be upated.',
        lesson: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error updating the lesson.',
      lesson: {}
    });
  }
});

// Delete lesson by ID request
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Lessons.remove(req.params.id);
    if (deleted) {
      res.status(200).json({
        error: false,
        message: 'The lesson was deleted successfully.'
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The lesson could not be deleted.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error deleting the lesson.'
    });
  }
});

module.exports = router;
