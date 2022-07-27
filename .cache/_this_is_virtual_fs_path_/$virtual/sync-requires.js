
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/nv3r5/PersonalWork/jlennieuk/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/nv3r5/PersonalWork/jlennieuk/src/pages/404.js")),
  "component---src-pages-cv-js": preferDefault(require("/home/nv3r5/PersonalWork/jlennieuk/src/pages/cv.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nv3r5/PersonalWork/jlennieuk/src/pages/index.js"))
}
