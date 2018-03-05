const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    if (!req.body || !req.body.id) {
        return res.status(400).send({ error: 'Token not present in request'})
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    })
    req.user.credits += 5
    const user = await req.user.save()

    res.send(user)
  })
}
