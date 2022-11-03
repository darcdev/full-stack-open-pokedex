const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || '8080'

// eslint-disable-next-line no-console
console.log(PORT)

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
