const router = require('express').Router()
const {
  addThought,
  getThoughts,
  getThought
} = require('../../controllers/thoughtControllers')

router.route('/')
  .post(addThought)
  .get(getThoughts)

router.route('/:thoughtId')
  .get(getThought)

module.exports = router