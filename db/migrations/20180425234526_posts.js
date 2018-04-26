const TABLE_NAME = 'posts'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.string('content').notNullable().defaultsTo('');
    table.string('date').notNullable().defaultsTo('');
    table.string('image');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
