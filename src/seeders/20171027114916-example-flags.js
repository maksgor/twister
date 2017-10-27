module.exports = {
  up: queryInterface => queryInterface.bulkInsert('feature_flags', [{
    name: 'MY_NEW_COOL_FEATURE',
    enabled: false,
  }, {
    name: 'YET_ANOTHER_COOL_FEATURE',
    enabled: true,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('feature_flags', null, {}),
};
