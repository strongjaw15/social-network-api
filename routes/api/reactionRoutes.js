const router = require('express').Router()
const {
  addReaction,
  removeReaction
} = require('../../controllers/reactionControllers')

// http://localhost:3001/api/reactions/thoughtId
router.route('/:thoughtId')
  .post(addReaction)

  // http://localhost:3001/api/reactions/reactionId
router.route('/:reactionId')
  .delete(removeReaction)

module.exports = router