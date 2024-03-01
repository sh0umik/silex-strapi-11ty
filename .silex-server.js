const StaticPlugin = require('@silexlabs/silex/dist/plugins/server/plugins/server/StaticPlugin').default
const node_modules = require('node_modules-path')
console.log('node_modules ->', node_modules('@silexlabs/silex-cms'))
console.log('node_modules ->', node_modules('grapesjs-blocks-flexbox'))
module.exports = async function(config, options) {
  await config.addPlugin(StaticPlugin, {
    routes: [
      {
        route: '/js/silex-cms/',
        path: node_modules('@silexlabs/silex-cms') + '/@silexlabs/silex-cms/dist/',
      },
      {
        route: '/js/grapesjs-blocks-flexbox/',
        path: node_modules('grapesjs-blocks-flexbox') + '/grapesjs-blocks-flexbox/dist/'
      }
    ],
  })
}
