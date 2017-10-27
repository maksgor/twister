module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('feature_flags', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            enabled: Sequelize.BOOLEAN,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('feature_flags');
    }
};
