/*const {ObjectId} = require('mongoose').Types*/
const {User} = require('../models')

// This adds a user.
const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This updates a user by id.
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.status(200).json(updatedUser)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This gets all the users.
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This gets one user by id.
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// This deletes one user by id.
const removeUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId)
    res.status(200).json(deletedUser)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

module.exports = {addUser, updateUser, getUsers, getUser, removeUser}