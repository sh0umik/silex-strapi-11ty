// my .silex-client config file
import Eleventy from './js/silex-cms/client.js'
import blocksFlexbox from 'grapesjs-blocks-flexbox';
import websiteInfoPlugin from './plugins/client/website-info.js'
//import basicBlock from './plugin/basic-block.js';
export default function(config, options) {
  config.addPlugin(websiteInfoPlugin, {})

  config.addPlugin(blocksFlexbox, {})

  // CMS Plugin
  config.addPlugin(Eleventy, {
    dataSources: [{
      id: 'apito',
      type: 'graphql',
      label: 'Apito',
      url: 'https://api.apito.io/secured/graphql',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1f4wh5doaeSicULNpwScAOjKJl5jcVj2CgMwYQ4qeArjvWHoSv9U4x0Gpa8qb2zQ3d0wYaWTL8ZA0yZnyfb8TeIaKWlLWkbFFg23vOFwzy3DZgobWXvgajYiX1TSwY1C7UMOXtvHUEyJViLMEZvzUdlk248ggf'
      },
    }],
    //fetchPlugin : { duration: '1d', type: 'json', removeUrlQueryParams: true } // https://www.11ty.dev/docs/plugins/fetch/
  })
  config.on('silex:startup:end', () => {
    const editor = config.getEditor()
    editor.on('storage:end:store', async () => {
      editor.runCommand('publish')
    })
  })
}
