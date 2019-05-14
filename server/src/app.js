/* eslint-disable no-irregular-whitespace */
console.log('hello world')
/* Using the require helps to grab the main file for each modules and import */
/* what ever is in the file into the const varaible to be use in the express server */
const express = require('express')
const bodyParser = require('body-parser') /* allow process of json data */
const cors = require('cors') /* allow any client or host to access the server */
const morgan = require('morgan') /* print log generator */
const app = express()

/* build express server i.e web endpoint */
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* hello */
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})
app.listen(process.env.PORT || 8081)
