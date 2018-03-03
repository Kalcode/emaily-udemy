const express = require('express')
const mongoose = require('mongoose')
const cookiesSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('\n\x1b[33mServer running on:\x1b[34m http://localhost:' + PORT + '\x1b[0m \n')
})
