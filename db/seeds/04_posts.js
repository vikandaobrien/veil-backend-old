const TABLE_NAME = 'posts'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Ada Lovelace'},
        {id: 2, name: 'Alan Turing'},
        {id: 3, name: 'Grace Hopper'},
        {id: 4, name: 'John Von Neumann'}
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
