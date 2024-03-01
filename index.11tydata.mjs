
import EleventyFetch from '@11ty/eleventy-fetch'
export default async function () {
  const result = {}
  
  try {
    result['apito'] = (await EleventyFetch(`https://api.apito.io/secured/graphql?cache_buster=227613`, {
      ...{"duration":"1s","type":"json"},
      fetchOptions: {
        headers: {
          'content-type': `application/json`,
'Content-Type': `application/json`,
'Authorization': `Bearer 1f4wh5doaeSicULNpwScAOjKJl5jcVj2CgMwYQ4qeArjvWHoSv9U4x0Gpa8qb2zQ3d0wYaWTL8ZA0yZnyfb8TeIaKWlLWkbFFg23vOFwzy3DZgobWXvgajYiX1TSwY1C7UMOXtvHUEyJViLMEZvzUdlk248ggf`,
        },
        method: 'POST',
        body: JSON.stringify({
          query: `query {
  __typename
  tasks {
    __typename
    data {
      __typename
      name
      description {
        __typename
        text

      }
      progress

    }

  }

}`,
        })
      }
    })).data
  } catch (e) {
    console.error('11ty plugin for Silex: error fetching graphql data', e, 'apito', 'https://api.apito.io/secured/graphql?cache_buster=227613', 'POST', `query {
  __typename
  tasks {
    __typename
    data {
      __typename
      name
      description {
        __typename
        text

      }
      progress

    }

  }

}`)
    throw e
  }

  return result
}
  