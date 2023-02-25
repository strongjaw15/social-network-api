const router = require('express').Router()
const {
  addThought,
  getThoughts,
  getThought,
  updateThought,
  removeThought
} = require('../../controllers/thoughtControllers')

// http://localhost:3001/api/thoughts
router.route('/')
  .post(addThought)
  .get(getThoughts)

// http://localhost:3001/api/thoughtId
router.route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(removeThought)

module.exports = router