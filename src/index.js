// const context = require.context('./Array', true, /\.js$/)
const context = require.context('./Object', true, /\.js$/)

;((context) => {
  context.keys().forEach(context)
})(context)
