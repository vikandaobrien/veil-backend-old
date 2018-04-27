const db = require('../../db');

function getAll () {
  return db('games');
}

function getOne (id) {
  return db('games')
  .where({ id: id })
  .then(games => {
    const promises = games.map(game => {
      return db('users_games')
      .join('users', 'users.id', 'users_games.user_id')
      .where('users_games.game_id', game.id)
      .then(users => {
        game.users = users;
        return game;
      });
    });
    return Promise.all(promises);
  });
}

module.exports = { getAll, getOne };
