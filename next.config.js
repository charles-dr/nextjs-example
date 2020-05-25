const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(withCSS({
  env: {
    API_URL: "http://dev.api.clearchoiceprep.info/api/" 
  }
}))
