const knex = require('knex');

const config = require('../knexfile');
const environment = process.env.NODE_ENVIRONMENT;

module.exports = knex(config[environment]);