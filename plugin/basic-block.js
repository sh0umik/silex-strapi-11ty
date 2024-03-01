// client-config.js
// Start Silex with `silex --client-config /path/to/client-config.js`
import flexboxPlugin from 'grapesjs-blocks-flexbox'
export default async function (config) {
    //config.grapesJsConfig.cssIcons = '/css/all.min.css'
    //config.grapesJsConfig.plugins.push((editor, opts) => { }) // Add any grapesjs plugin
    config.grapesJsConfig.plugins.push(flexboxPlugin);
}
