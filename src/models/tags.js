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
  return db('tags')
  .where({ id: id})
  .then(tags => {
    const promises = tags.map(tag => {
      return db('posts_tags')
      .join('posts', 'posts.id', 'posts_tags.post_id')
      .where('posts_tags.tag_id', tag.id)
      .then(posts => {
        const authorPromises = posts.map(post => {
          return db('users')
          .where('id', post.user_id)
          .first()
          .then(user => {
            post.author = user;
            return post;
          });
        });
        return Promise.all(authorPromises);
      })
      .then(posts => {
        const postPromises = posts.map(post => {
          return db('posts_tags')
          .join('tags', 'tags.id', 'posts_tags.tag_id')
          .where('posts_tags.post_id', post.id)
          .then(tags => {
            post.tags = tags;
            return post;
          });
        });
        return Promise.all(postPromises);
      })
      .then(posts => {
        tag.posts = posts;
        return tag;
      })
    });
    return Promise.all(promises);
  });
}

module.exports = { getAll, getOne };
