const TABLE_NAME = 'characters'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'Vikanda Glynae',
          class: 'Scholar',
          server: 'Balmung',
          image: 'https://goo.gl/VdTK1Y',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis.',
          user_id: 1,
          game_id: 1
        },
        {
          id: 2,
          name: 'Vikanda Glynae',
          class: 'Elementalist',
          server: 'Ehmry Bay',
          image: 'https://goo.gl/XgvQB9',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis.',
          user_id: 1,
          game_id: 3
        },
        {
          id: 3,
          name: 'Nino Glynae',
          class: 'Paladin',
          server: 'Balmung',
          image: 'https://goo.gl/WQNrda',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis. Nullam condimentum luctus turpis.',
          user_id: 2,
          game_id: 1
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
