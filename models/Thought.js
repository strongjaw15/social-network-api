const {Schema, model} = require('mongoose')
const moment = require('moment')

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
    get: (date) => {moment(date).format('MMMM Do, YYYY h:mm a')}
  },
  username: {
    type: String,
    required: true
  },
  reactions: []
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
})

thoughtSchema.virtual('reactionCount').get(()=>{return this.reactions.length})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought