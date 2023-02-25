/*const {ObjectId} = require('mongoose').Types*/
const {Thought} = require('../models')

// This creates a thought.
const addThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body)
    res.status(200).json(newThought)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This gets all the thoughts.
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find()
    return res.status(200).json(thoughts)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This gets one thought by id.
const getThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId)
    return res.status(200).json(thought)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This updates a thought by id.
const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body)
    res.status(200).json(updatedThought)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This deletes a thought by id.
const removeThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId)
    res.status(200).json(deletedThought)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

module.exports = {addThought, getThoughts, getThought, updateThought, removeThought}