const KoaRouter = require('koa-router');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const { FeatureFlagsSchema } = require('./graphql/schema');
const authController = require('./controllers/auth');

const router = new KoaRouter();

function initRouter(appCtx = {}) {
  return router
    .post('/graphql', graphqlKoa({ schema: FeatureFlagsSchema, context: appCtx }))
    .get('/graphql', graphqlKoa({ schema: FeatureFlagsSchema, context: appCtx }))
    .get('/graphiql', graphiqlKoa({ endpointURL: '/graphql', context: appCtx }))
    .get('/auth', authController);
}


module.exports = { initRouter };
