const express = require('express');
const Videos = require('./videosModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const videos = await Videos.find();
    if (videos.length) {
      res.status(200).json({
        error: false,
        message: 'The videos where retrieved successfully.',
        videos
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The videos could not be found.',
        videos: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the vidoes.',
      vidoes: []
    });
  }
});

// Get video(s) by lesson ID
router.get('/lesson/:id', async (req, res) => {
  try {
    const videos = await Videos.findByLessonID(req.params.id);
    if (videos) {
      res.status(200).json({
        error: false,
        message: 'The videos was found successfully.',
        videos
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The videos could not be found.',
        videos: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the videos.',
      videos: []
    });
  }
});

// Get video by video ID
router.get('/video/:id', async (req, res) => {
  try {
    const video = await Videos.findByID(req.params.id);
    if (video) {
      res.status(200).json({
        error: false,
        message: 'The video was found successfully.',
        video
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The video could not be found.',
        video: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the video.',
      video: {}
    });
  }
});

module.exports = router;
