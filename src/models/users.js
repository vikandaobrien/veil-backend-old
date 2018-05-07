const db = require('../../db');
const bcrypt = require('bcrypt-as-promised');

function getAll () {
  return db('users');
}

function getOne (id) {
  return db('users')
  .where({ id: id })
  .then(users => {
    const promises = users.map(user => {
      return db('users_games')
      .join('games', 'games.id', 'users_games.game_id')
      .where('users_games.user_id', user.id)
      .then(games => {
        const charPromises = games.map(game => {
          return db('characters')
          .where('game_id', game.id)
          .where('user_id', user.id)
          .then(characters => {
            game.characters = characters;
            return game;
          });
        });
        return Promise.all(charPromises);
      })
      .then(games => {
        user.games = games;
        return user;
      });
    });
    return Promise.all(promises);
  })
  .then(([ data ]) => {
    delete data.password
    return data
  });
}

function getOneByUserName (email) {
  return (
    db('users')
    .where({ email })
    .first()
  )
}

function create (email, password, fname, lname, birthday, location, timezone, role, image, info) {

  // check to see of user already exists
  return getOneByUserName(email)
  .then(function(data){
    // if user already exists, return 400
    if(data) throw { status: 400, message:'User already exists'}

    // hash password
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){

    // 3. Insert record into database
    return (
      db('users')
      .insert({ email, password: hashedPassword, fname, lname, birthday, location, timezone, role, image, info })
      .returning('*')
    )
  })
  .then(function([ data ]){
    // 4. strip hashed password away from object
    delete data.password
    // 5. "return/continue" promise
    return data
  })
}

module.exports = { getAll, getOne, getOneByUserName, create }
