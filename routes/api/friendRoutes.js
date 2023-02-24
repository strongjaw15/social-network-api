const router = require('express').Router()
const {
  addFriend,
  removeFriend
} = require('../../controllers/friendControllers')

router.route('/')
  .post(addFriend)

router.route('/:friendId')
  .delete(removeFriend)

  module.exports = router