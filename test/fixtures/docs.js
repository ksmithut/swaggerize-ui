'use strict';

module.exports = {
  swagger: '2.0',
  info: {
    title: 'My Api',
    description: 'My Api\'s description',
    version: '1.0.0'
  },
  produces: ['application/json'],
  paths: {
    '/hello/{name}': {
      get: {
        summary: 'Hello World',
        description: 'This is an endpoint to say hello to whoever you want',
        tags: ['testing'],
        parameters: [
          {
            name: 'name',
            in: 'path',
            description: 'The name to say hello to',
            type: 'string'
          }
        ],
        responses: {
          200: {
            description: 'Successful',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  description: 'The hello phrase'
                }
              }
            }
          }
        }
      }
    }
  }
};
