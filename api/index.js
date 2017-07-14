const express = require('express'),
      config = require('../config/'),
      path = require('path'),
      sr = require('common-tags').stripIndents
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use((err, req, res, next) => {
  console.error(err)
  res.send('Oops error')
})
app.disable('x-powered-by')
app.listen(config.services.api.port, console.log(`[rest] Listening on ${config.services.api.host || config.services.api.route}:${config.services.api.port}`))