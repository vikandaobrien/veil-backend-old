const TABLE_NAME = 'games'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'Final Fantasy XIV',
          server: 'Balmung',
          image: ''
        },
        {
          id: 2,
          name: 'Guild Wars 2',
          server: 'Ehmry Bay',
          image: ''
        },
        {
          id: 3,
          name: 'Mabinogi',
          server: 'Alexina',
          image: ''
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
