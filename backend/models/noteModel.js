const mongoose = require('mongoose');

// notes have to be tied to a ticket
const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Ticket',
    },
    text: {
      type: String,
      required: [true, 'Please add some text'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    adminId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', noteSchema);
