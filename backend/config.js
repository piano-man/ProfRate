const providers = ['google']

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
    : `https://localhost:5000/${provider}/callback`
})

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-auth-twitter.netlify.com'
  : ['https://127.0.0.1:3000', 'https://localhost:3000']



exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: googleURL
}
