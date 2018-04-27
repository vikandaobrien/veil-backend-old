const TABLE_NAME = 'tags'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'News',
          color: 'yellow'
        },
        {
          id: 2,
          name: 'Final Fantasy XIV',
          color: 'blue'
        },
        {
          id: 3,
          name: 'Overwatch',
          color: 'red'
        },
        {
          id: 4,
          name: 'Raiding',
          color: 'cyan'
        },
        {
          id: 5,
          name: 'Roleplay',
          color: 'green'
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
