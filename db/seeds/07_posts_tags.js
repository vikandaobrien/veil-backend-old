const TABLE_NAME = 'posts_tags'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          post_id: 1,
          tag_id: 1
        },
        {
          post_id: 1,
          tag_id: 2
        },
        {
          post_id: 2,
          tag_id: 1
        },
        {
          post_id: 2,
          tag_id: 2
        },
        {
          post_id: 3,
          tag_id: 3
        },
        {
          post_id: 4,
          tag_id: 1
        },
        {
          post_id: 5,
          tag_id: 3
        },
        {
          post_id: 5,
          tag_id: 4
        },
        {
          post_id: 6,
          tag_id: 2
        },
        {
          post_id: 7,
          tag_id: 1
        },
        {
          post_id: 7,
          tag_id: 2
        }
      ]);
    })
};
