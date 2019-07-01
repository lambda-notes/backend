const express = require('express');
const Notes = require('./notesModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Notes.findAllNotes();
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the notes.'
    });
  }
});
