const {Schema, model} = require('mongoose')

// This sets up the User Schema.
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // This validates the email with a regex.
    match: [/.+\@.+\..+/, 'Email must be valid.']
  },
  // This referrences the Thought Model
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  // This is a self-referrence to other users.
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},
// This makes it so that the virtual gets sent out with the Schema.
{
  toJSON: {
    virtuals: true
  },
})

// This is the virtual method which finds how many friends a user has.
userSchema.virtual('friendCount').get(function(){return this.friends.length})

// This creates the User Model based on the User Schema.
const User = model('User', userSchema)

// This exports the Model.
module.exports = User