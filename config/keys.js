if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dev.keys')
} else if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod.keys')
}
