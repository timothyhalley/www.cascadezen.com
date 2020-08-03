// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api, options) {
  api.loadSource(async actions => {

    // Planet Data for library
    const { data } = await axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    const collection = actions.addCollection('Planets')
    for (const item of data.bodies) {
      collection.addNode({
        id: item.id,
        name: item.name,
        altname: item.alternativeName,
        planet: item.isPlanet,
        mass: item.mass,
        gravity: item.gravity,
        radius: item.meanRadius,
        discoveredby: item.discoveredBy,
        discoverydate: item.discoveryDate
      })
    }
  })
  api.loadSource(async store => {
    store.addMetadata('message', 'This is a global text')
  })
}
