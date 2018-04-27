const db = require('../../db');

function getAll () {
  return db('games');
}

function getOne (id) {
  return db('games').where({ id: id }).first();
}

module.exports = { getAll, getOne };
