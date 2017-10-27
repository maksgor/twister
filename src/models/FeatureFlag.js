module.exports = function featureFlag(sequelize, Sequelize) {
  return sequelize.define('feature_flags', {
    name: Sequelize.STRING,
    enabled: Sequelize.BOOLEAN,
  }, {});
};
