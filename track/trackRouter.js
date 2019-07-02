const express = require('express');
const Track = require('./trackModel.js');

const router = express.Router();

// Get all tracks request
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    if (tracks.length) {
      res.status(200).json({
        error: false,
        message: 'The tracks were found successfully.',
        tracks
      });
    } else {
      res.status(404).status({
        error: true,
        message: 'The tracks could not be found.',
        tracks: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the tracks.',
      tracks: []
    });
  }
});

// Get track by track ID request
router.get('/:id', async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (track) {
      res.status(200).json({
        error: false,
        message: 'The track was found successfully.',
        track
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The track could not be found.',
        track: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the track.',
      track: {}
    });
  }
});

// Create new track request
router.post('/', async (req, res) => {
  try {
    const track = await Track.insert(req.body);
    if (track) {
      const newTrack = await Track.findById(track);
      res.status(200).json({
        error: false,
        message: 'The track was created successfully.',
        track: newTrack
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The track could not be created.',
        track: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error creating the track.',
      track: {}
    });
  }
});

// Update track by track ID request
router.put('/:id', async (req, res) => {
  try {
    const updateTrack = await Track.update(req.body, req.params.id);
    if (updateTrack) {
      const track = await Track.findById(req.params.id);
      res.status(200).json({
        error: false,
        message: 'The track was updated successfully.',
        track
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The track could not be updated.',
        track: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error updating the track.',
      track: {}
    });
  }
});

// Delete track by track ID request
router.delete('/:id', async (req, res) => {
  try {
    const deletedTrack = await Track.remove(req.params.id);
    if (deletedTrack) {
      res
        .status(200)
        .json({ error: false, message: 'The track was deleted successfully.' });
    } else {
      res.status(404).json({
        error: true,
        message: 'The track could not be deleted.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error deleting the track.'
    });
  }
});

module.exports = router;
