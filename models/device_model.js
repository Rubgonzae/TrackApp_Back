const Sequelize = require('sequelize');
const conn = require('./../database/connection');

module.exports = conn.define('devices', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    name: Sequelize.STRING,
    serial: Sequelize.STRING,
    description: Sequelize.STRING,
    category: Sequelize.INTEGER,
    state: Sequelize.BOOLEAN
});