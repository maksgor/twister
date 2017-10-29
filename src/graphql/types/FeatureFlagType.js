const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const FeatureFlagType = new GraphQLObjectType({
  name: 'FeatureFlag',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
      description: 'Explanatory name for feature-flag. Example: MY_NEW_COOL_AB_TEST',
    },
    enabled: {
      type: GraphQLBoolean,
      description: 'Current feature-flag condition',
    },
  },
});

module.exports = FeatureFlagType;
