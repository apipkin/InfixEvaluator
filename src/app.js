'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');

const infixEval = require('./lib/infixEvaluator');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
  host: 'localhost', 
  port: 3501,
  routes: {
    files: {
        relativeTo: __dirname
    }
  }
});

server.register([require('inert'), require('vision')], (err) => {

  Hoek.assert(!err, err);

  // Setup view logic
  server.views({
      engines: {
          html: require('handlebars')
      },
      relativeTo: __dirname,
      path: './views',
      layout: 'index',
      layoutPath: './views/layout',
      partialsPath: './views/partials'
  });

  // Handle direct calls with no query
  server.route({
    method: 'get',
    path: '/solve/',
    handler: function (request, reply) {
      return reply({
        expression: '',
        error: {
          message: 'Please enter an expression.'
        }
      })
    }
  });

  // Handle solve queries
  server.route({
    method: 'GET',
    path: '/solve/{q}',
    handler: function (request, reply) {
      const exp = request.params.q;

      try {
        const val = infixEval(exp);

        return reply({
          expression: exp,
          value: val
        });
      } catch (e) {
        return reply({
          expression: exp,
          error: {
            name: e.name,
            message: e.message
          }
        });
      };
    }
  });

  // Handle style requests
  server.route({
      method: 'get',
      path: '/styles/{file}',
      handler: {
          directory: {
              path: './public/styles'
          }
      }
  });

  // Handle script requests
  server.route({
      method: 'get',
      path: '/scripts/{file}',
      handler: {
          directory: {
              path: './public/scripts'
          }
      }
  });

  // Handle app view
  server.route({
    method: 'GET',
    path:'/', 
    handler: {
      view: {
        template: 'index',
        context: {
          title: 'Infix Evaluator'
        }
      }
    }
  });

  // Start the server
  server.start((err) => {
    if (err) throw err;
  
    console.log('Server running at:', server.info.uri);
  });
  
});