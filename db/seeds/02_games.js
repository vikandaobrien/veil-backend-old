const TABLE_NAME = 'games'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'Final Fantasy XIV',
          server: 'Balmung',
          image: 'https://goo.gl/T5sHmK'
        },
        {
          id: 2,
          name: 'Overwatch',
          server: 'n/a',
          image: 'https://goo.gl/HJUka9'
        },
        {
          id: 3,
          name: 'Guild Wars 2',
          server: 'Ehmry Bay',
          image: 'https://goo.gl/FW29k7'
        },
        {
          id: 4,
          name: 'Fortnite',
          server: 'n/a',
          image: 'https://goo.gl/NFQFNE'
        },
        {
          id: 5,
          name: 'Minecraft',
          server: 'n/a',
          image: 'https://goo.gl/EKFmrx'
        },
        {
          id: 6,
          name: 'Mabinogi',
          server: 'Alexina',
          image: 'https://goo.gl/pcaxwT'
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
