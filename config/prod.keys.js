module.exports = {
  // Google API Keys
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  // DB Connection
  mongoURI: process.env.MONGO_URI,

  // Cookie-Sessions
  cookieKey: process.env.COOKIE_KEY

  // Strip API
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
}
