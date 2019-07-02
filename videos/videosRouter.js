const express = require('express');
const Videos = require('./videosModel.js');

const router = express.Router();

// Get all videos request
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

// Get video(s) by lesson ID request
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

// Get video by video ID request
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

// Create video request
router.post('/', async (req, res) => {
  try {
    const video = await Videos.insert(req.body);
    if (video) {
      const newVideo = await Videos.findByID(video);
      res.status(200).json({
        error: false,
        message: 'The video was created successfully.',
        video: newVideo
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
      message: 'There was an error creating the video.',
      video: {}
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await Videos.update(req.body, req.params.id);
    if (updatedVideo) {
      const video = await Videos.findByID(req.params.id);
      res.status(200).json({
        error: false,
        message: 'The video was updated successfully.',
        video
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The video could not be updated.',
        video: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error updating the video.',
      video: {}
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedVideo = await Videos.remove(req.params.id);
    if (deletedVideo) {
      res
        .status(200)
        .json({ error: false, message: 'The video was deleted successfully.' });
    } else {
      res.status(404).json({
        error: true,
        message: 'The video could not be deleted.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error deleting the video.'
    });
  }
});

module.exports = router;
