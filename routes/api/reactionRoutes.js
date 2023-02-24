const router = require('express').Router()
const {
  addReaction,
  removeReaction
} = require('../../controllers/reactionControllers')

router.route('/')
  .post(addReaction)

router.route('/:reactionId')
  .delete(removeReaction)

module.exports = router