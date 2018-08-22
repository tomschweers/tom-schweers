const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource')
  res.render('index', { title: 'Express' })
})

module.exports = router
