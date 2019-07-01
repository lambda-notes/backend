const express = require('express');
const Notes = require('./notesModel.js');

const router = express.Router();


// Get all notes request

router.get('/', async (req, res) => {
  try {
    const notes = await Notes.findAllNotes();
    if (notes.length) {
      res.status(200).json({
        error: false,
        message: 'The notes were found successfully.',
        notes
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The notes could not be found.',
        notes: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the notes.',
      notes: []
    });
  }
});

// Get all notes by user ID request
router.get('/user/:id', async (req, res) => {
  try {
    const notes = await Notes.findByUserId(req.params.id);
    if (notes.length) {
      res.status(200).json({
        error: false,
        message: "The user's notes where found successfully.",
        notes
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The notes could not be found.',
        notes: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the notes.',
      notes: []
    });
  }
});

// Get note by note ID request
router.get('/note/:id', async (req, res) => {
  try {
    const note = await Notes.findByNoteId(req.params.id);
    if (note) {
      res.status(200).json({
        error: false,
        message: 'The note was found successfully.',
        note
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The note could not be found.',
        notes: {}
      });

    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the note.',
      notes: {}

    });
  }
});

module.exports = router;
