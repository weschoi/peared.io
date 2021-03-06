const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);

db.plugin('pagination');
db.plugin('registry');

knex.migrate.latest();

module.exports = db;

