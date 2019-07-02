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

// Create new notes request
router.post('/', async (req, res) => {
  if (!req.body.notesLessonID || !req.body.userID) {
    return res.status(500).json({
      error: true,
      message: 'Please include the required information and try again.'
    });
  }
  try {
    const newNote = await Notes.insert(req.body);
    if (newNote) {
      const note = await Notes.findByNoteId(newNote);
      res.status(200).json({
        error: false,
        message: 'The note was created successfully.',
        note
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The note could not be created.',
        notes: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error creating the note.',
      notes: {}
    });
  }
});

// Update note request
router.put('/:id', async (req, res) => {
  if (!req.body.noteTitle || !req.body.note) {
    return res.status(500).json({
      error: true,
      message: 'Please include information to upate and try again.',
      note: {}
    });
  }
  try {
    const updatedNote = await Notes.update(req.body, req.params.id);
    if (updatedNote) {
      const note = await Notes.findByNoteId(req.params.id);
      res.status(200).json({
        error: false,
        message: 'The note was updated successfully',
        note
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'The note could not be updated.',
        note: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error updating the note.',
      note: {}
    });
  }
});

// Delete note request
router.delete('/:id', async (req, res) => {
  try {
    const deletedNote = await Notes.remove(req.params.id);
    if (deletedNote) {
      res
        .status(200)
        .json({ error: false, message: 'The note was deleted successfully.' });
    } else {
      res.status(500).json({
        error: true,
        message: 'The note could not be deleted.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error deleting the note.'
    });
  }
});

module.exports = router;
