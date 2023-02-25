const router = require('express').Router()
const {
  addReaction,
  removeReaction
} = require('../../controllers/reactionControllers')

// http://localhost:3001/api/reactions/thoughtId
router.route('/:thoughtId')
  .post(addReaction)

  // http://localhost:3001/api/reactions/thoughtId/reactionId
router.route('/:thoughtId/:reactionId')
  .delete(removeReaction)

module.exports = router