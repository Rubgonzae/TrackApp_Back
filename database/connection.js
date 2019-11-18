const Sequelize = require('sequelize');

const conn = new Sequelize('v1E8WrPB0z', 'v1E8WrPB0z', 'R18yXWGGrt', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

conn.authenticate()
    .then( () => console.log('Connection done') )
    .catch( (err) => console.log(`Error connecting ${err}`) );

module.exports = conn;