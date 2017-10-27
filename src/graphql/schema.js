const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
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

const FeatureFlagsListType = new GraphQLObjectType({
    name: 'FeatureFlagList',
    fields: {
        schema: {
            type: new GraphQLList(FeatureFlagType)
        }
    }
});

const FeatureFlagsSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Root',
        fields: {
            flag: {
                type: FeatureFlagType,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: async (_, args, ctx, info) => {
                    const requestedFields = Object.keys(graphqlFields(info));
                    return await ctx.db.FeatureFlag.findOne({
                        attributes: requestedFields,
                        where: args
                    });
                }
            },
            flags: {
                type: FeatureFlagsListType,
                args: {},
                resolve: async (_, args, ctx, info) => {
                    const requestedFields = Object.keys(graphqlFields(info));
                    return await ctx.db.FeatureFlag.findAll({
                        attributes: requestedFields
                    });
                }
            },
        },
    }),
});


module.exports = { FeatureFlagsSchema };
