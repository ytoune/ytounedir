
const path = require('path')
const ghPages = require('gh-pages')

ghPages.publish(path.resolve(__dirname, 'dist'))
