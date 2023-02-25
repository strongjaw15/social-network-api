const router = require('express').Router()
const {
  addFriend,
  removeFriend
} = require('../../controllers/friendControllers')

// http://localhost:3001/api/friends/userId/friendId
router.route('/:userId/:friendId')
  .post(addFriend)
  .delete(removeFriend)

  module.exports = router