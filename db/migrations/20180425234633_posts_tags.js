const TABLE_NAME = 'posts_tags'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.integer('post_id').notNullable();
    table.foreign('post_id').references('posts.id').onDelete('CASCADE');
    table.integer('tag_id').notNullable();
    table.foreign('tag_id').references('tags.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
