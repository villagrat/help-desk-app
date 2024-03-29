const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');
const Note = require('../models/noteModel');

// @desc   GET all notes for a ticket
// @route  /api/tickets/:ticketId/notes
// @method GET
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // syntax to get id from URL
  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc   Add a note to a ticket
// @route  /api/tickets/:ticketId/notes
// @method POST
// @access Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // syntax to get id from URL
  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  const note = await Note.create({
    text: req.body.text,
    isAdmin: false,
    ticket: req.params.ticketId,
    user: req.user.id,
  });

  res.status(201).json(note);
});

module.exports = {
  getNotes,
  addNote,
};
