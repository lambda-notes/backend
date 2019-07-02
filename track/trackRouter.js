const express = require('express');
const Track = require('./trackModel.js');

const router = express.Router();

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
      res
        .status(404)
        .json({
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

module.exports = router;
