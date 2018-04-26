const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          email: 'vikanda.gonzales@yahoo.com',
          password: 'moo',
          fname: 'Vikanda',
          lname: 'Gonzales',
          birthday: '1992-09-16',
          location: 'Seattle, WA',
          timezone: 'UTC-8:00',
          role: 'Leader',
          image: '',
          info: ''
        },
        {
          id: 2,
          email: 'wanjak.gonzales@gmail.com',
          password: 'moo',
          fname: 'Nino',
          lname: 'Gonzales',
          birthday: '1994-04-06',
          location: 'Vancouver, BC',
          timezone: 'UTC-8:00',
          role: 'Knight',
          image: '',
          info: ''
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
