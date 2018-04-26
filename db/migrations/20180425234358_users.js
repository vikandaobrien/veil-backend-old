const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('fname').notNullable();
    table.string('lname').notNullable();
    table.date('birthday').notNullable();
    table.string('location').notNullable();
    table.string('timezone').notNullable();
    table.string('role').defaultsTo('Knight');
    table.string('image').defaultsTo('');
    table.string('info', 100000).defaultsTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
