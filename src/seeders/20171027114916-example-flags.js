module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('feature_flags', [{
            name: 'MY_NEW_COOL_FEATURE',
            enabled: false,
        }, {
            name: 'YET_ANOTHER_COOL_FEATURE',
            enabled: true,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('feature_flags', null, {});
    }
};