const TABLE_NAME = 'characters'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('email').notNullable().defaultsTo('');
    table.string('name').notNullable().defaultsTo('');
    table.string('class').notNullable().defaultsTo('');
    table.string('server').notNullable().defaultsTo('');
    table.string('image');
    table.string('info');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('game_id').notNullable();
    table.foreign('game_id').references('games.id').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
