const searchExcludedRoutes = require('./searchExcludeRoutes.json')
const constants = require('./constants')

exports.SEOIgnorePatterns = searchExcludedRoutes.map((route) =>
  `${constants.BASE_URL}${route}`
)
