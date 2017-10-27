const { Pool } = require('pg');


function initDb() {
    const config = {db: {}};
    return new Pool({
        user: config.db.user,
        host: config.db.host,
        database: config.db.database,
        password: config.db.password,
        port: config.db.port,
    });
}
module.exports = { initDb };
