const {Schema, model} = require('mongoose')
const moment = require('moment')
const reactionSchema = require('./Reaction')

// This sets up the Thought Schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // This formats the date when it is read.
    get: function (date) {return moment(date).format('MMMM Do, YYYY, h:mm a')}
  },
  username: {
    type: String,
    required: true
  },
  // This links the reactions subdocument schema.
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
})

// This calculates the number of reactions for the given thought.
thoughtSchema.virtual('reactionCount').get(function(){return this.reactions.length})

// This sets up the model based on the schema.
const Thought = model('Thought', thoughtSchema)

module.exports = Thought