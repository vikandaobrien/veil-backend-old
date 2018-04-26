const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('email').notNullable().defaultsTo('');
    table.string('password').notNullable().defaultsTo('');
    table.string('fname').notNullable().defaultsTo('');
    table.string('lname').notNullable().defaultsTo('');
    table.string('location').notNullable().defaultsTo('');
    table.string('timezone').notNullable().defaultsTo('');
    table.string('role').notNullable().defaultsTo('');
    table.string('image');
    table.string('info');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
