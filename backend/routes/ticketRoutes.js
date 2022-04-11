const express = require('express');
const router = express.Router();
const {
  getTicket,
  getTickets,
  createTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

// In order for our route to be /api/tickets/:ticketId/notes
// Re-routes into note router
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getTickets).post(protect, createTicket);

// literally has to be :id by Mongo convention
router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
