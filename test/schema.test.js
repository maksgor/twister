const { expect } = require('chai');
const { describe, it } = require('mocha');
const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql');
const FeatureFlagType = require('../src/graphql/types/FeatureFlagType');

describe('GraphQL Schema', () => {
  describe('FeatureFlagType', () => {
    it('should have `id` field of GraphQLID type', () => {
      expect(FeatureFlagType.getFields()).to.have.property('id');
      expect(FeatureFlagType.getFields().id.type).to.deep.equals(GraphQLID);
    });

    it('should have `enabled` field of type GraphQLBoolean', () => {
      expect(FeatureFlagType.getFields()).to.have.property('enabled');
      expect(FeatureFlagType.getFields().enabled.type).to.deep.equals(GraphQLBoolean);
    });

    it('should have `name` field of type GraphQLString', () => {
      expect(FeatureFlagType.getFields()).to.have.property('name');
      expect(FeatureFlagType.getFields().name.type).to.deep.equals(GraphQLString);
    });
  });
});
