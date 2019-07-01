const express = require('express');
const Notes = require('./notesModel.js');

const router = express.Router();

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
      res
        .status(404)
        .json({ error: true, message: 'The notes could not be found.' });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'There was an error finding the notes.'
    });
  }
});

module.exports = router;
