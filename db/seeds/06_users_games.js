const TABLE_NAME = 'users_games'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          user_id: 1,
          game_id: 1
        },
        {
          user_id: 1,
          game_id: 2
        },
        {
          user_id: 1,
          game_id: 3
        },
        {
          user_id: 2,
          game_id: 1
        },
        {
          user_id: 2,
          game_id: 2
        },
      ]);
    })
};
