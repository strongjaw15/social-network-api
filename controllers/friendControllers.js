const {User} = require('../models')

// This adds a friend to a user by id.
const addFriend = async (req, res) => {
  try {
    const newFriend = await User.findByIdAndUpdate(req.params.userId, 
      {$addToSet: {friends: req.params.friendId}},
      {new: true})
    res.status(200).json(newFriend.friends)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This deletes a friend by id.
const removeFriend = async (req, res) => {
  try {
    const deletedFriend = await User.findByIdAndUpdate(req.params.userId, 
      {$pull: {friends: req.params.friendId}},
      {new: true})
    res.status(200).json(deletedFriend.friends)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

module.exports = {addFriend, removeFriend}