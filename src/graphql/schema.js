const {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const graphqlFields = require('graphql-fields');
const FeatureFlagType = require('./types/FeatureFlagType');

const FeatureFlagsSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      flag: {
        type: FeatureFlagType,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: async (_, args, ctx, info) => {
          const requestedFields = Object.keys(graphqlFields(info));
          return ctx.db.FeatureFlag.findOne({
            attributes: requestedFields,
            where: args,
          });
        },
      },
      flags: {
        type: new GraphQLList(FeatureFlagType),
        args: {
          name: {
            type: GraphQLString,
          },
          enabled: {
            type: GraphQLBoolean,
          },
        },
        resolve: async (_, args, ctx, info) => {
          const requestedFields = Object.keys(graphqlFields(info));
          return ctx.db.FeatureFlag.findAll({
            attributes: requestedFields,
            where: args,
          });
        },
      },
    },
  }),
});


module.exports = { FeatureFlagsSchema };
