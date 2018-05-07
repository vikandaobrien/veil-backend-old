const db = require('../../db');

function getAll () {
  return db('characters');
}

function getOne (id) {
  return db('characters')
  .where({ id: id })
  .first();
}

module.exports = { getAll, getOne };
