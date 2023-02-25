const { Schema, Types } = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => {new Types.ObjectId()}
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date) {return moment(date).format('MMMM Do, YYYY, h:mm a')}
  }
},
{
  toJSON: {
    getters: true
  }
})

module.exports = reactionSchema