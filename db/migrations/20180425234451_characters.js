const TABLE_NAME = 'characters'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('class').defaultsTo('n/a');
    table.string('server').defaultsTo('n/a');
    table.string('image').defaultsTo('https://goo.gl/kdcuiQ');
    table.string('info', 100000).defaultsTo('');
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
