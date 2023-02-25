const {ObjectId} = require('mongoose').Types
const {User, Thought} = require('../models')

// addUser
const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// updateUser
const updateUser = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// getUsers
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// getUser
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

// removeUser
const removeUser = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}

module.exports = {addUser, updateUser, getUsers, getUser, removeUser}