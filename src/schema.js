const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');
const graphqlFields = require('graphql-fields');


const FeatureFlagType = new GraphQLObjectType({
    name: 'FeatureFlag',
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
            description: 'Explanatory name for feature-flag. Example: MY_NEW_COOL_AB_TEST'
        },
        enabled: {
            type: GraphQLBoolean,
            description: 'Current feature-flag condition'
        },
    }
});

const FeatureFlagsSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      featureFlag: {
        type: FeatureFlagType,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (_, args, context, info) => {
            const requestedFields = Object.keys(graphqlFields(info));
            console.log('db is ', context.db);
            return {
                name: 'NEW_SHOPPING_CART',
                enabled: true
            };
        }
      },
    },
  }),
});


module.exports = { FeatureFlagsSchema };
