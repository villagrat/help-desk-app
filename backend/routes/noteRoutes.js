const express = require('express');
// In order for our route to be /api/tickets/:ticketId/notes
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require('../controllers/noteController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;
