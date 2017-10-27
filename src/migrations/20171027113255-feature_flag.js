module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('feature_flags', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    enabled: Sequelize.BOOLEAN,
  }),

  down: queryInterface => queryInterface.dropTable('feature_flags'),
};
