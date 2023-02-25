const {Thought} = require('../models')

// This creates a reaction to a thought by id.
const addReaction = async (req, res) => {
  try {
    const newReaction = await Thought.findByIdAndUpdate(req.params.thoughtId, 
      {$addToSet: {reactions: req.body}},
      {new: true})
    res.status(200).json(newReaction.reactions)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This deletes a reaction by id.
const removeReaction = async (req, res) => {
  try {
    const deletedReaction = await Thought.findByIdAndUpdate(req.params.thoughtId, 
      {$pull: {reactions: {_id: req.params.reactionId}}},
      {new: true})
    res.status(200).json(deletedReaction.reactions)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

module.exports = {addReaction, removeReaction}