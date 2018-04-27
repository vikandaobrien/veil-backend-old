const db = require('../../db');

function getAll () {
  return db('tags')
  .then(tags => {
    const promises = tags.map(tag => {
      return db('posts_tags')
      .join('posts', 'posts.id', 'posts_tags.post_id')
      .where('posts_tags.tag_id', tag.id)
      .then(posts => {
        tag.posts = posts;
        return tag;
      })
    });
    return Promise.all(promises);
  });
}

function getOne (id) {
  return db('tags').where({ id: id }).first();
}

module.exports = { getAll, getOne };
