const TABLE_NAME = 'games'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('server').defaultsTo('n/a');
    table.string('image').defaultsTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
