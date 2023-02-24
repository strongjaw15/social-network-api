const router = require('express').Router()
const {
  addUser,
  updateUser,
  getUsers,
  getUser,
  removeUser
} = require('../../controllers/userControllers')

router.route('/')
  .post(addUser)
  .get(getUsers)

router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(removeUser)

module.exports = router