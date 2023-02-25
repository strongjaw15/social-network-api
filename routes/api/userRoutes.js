const router = require('express').Router()
const {
  addUser,
  updateUser,
  getUsers,
  getUser,
  removeUser
} = require('../../controllers/userControllers')

// http://localhost:3001/api/users
router.route('/')
  .post(addUser)
  .get(getUsers)

// http://localhost:3001/api/users/userId
router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(removeUser)

module.exports = router