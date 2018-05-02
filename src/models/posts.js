const db = require('../../db');

function getAll () {
  return db('posts')
  .then(posts => {
    const promises = posts.map(post => {
      return db('users')
      .where('id', post.user_id)
      .first()
      .then(user => {
        post.author = user;
        return post;
      });
    });
    return Promise.all(promises);
  })
  .then(posts => {
    const promises = posts.map(post => {
      return db('posts_tags')
      .join('tags', 'tags.id', 'posts_tags.tag_id')
      .where('posts_tags.post_id', post.id)
      .then(tags => {
        post.tags = tags;
        return post;
      });
    });
    return Promise.all(promises);
  });
}

function getOne (id) {
  return db('posts')
  .where({ id: id })
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
  });
}

function create (title, image, content, user_id) {
  console.log(title)
  return db('posts')
  .insert({ title, image, content, user_id })
  .returning('*')
  .then(([data]) => {
    return data;
  });
}

function update (id, title, image, content) {
  return db('posts')
  .update({ title, image, content })
  .where({ id: id })
  .returning('*')
  .then(([data]) => {
    return data;
  });
}

function remove (id) {
  return db('posts')
  .del()
  .where({ id: id })
  .returning('*')
  .then(([data]) => {
    delete data.id;
    return data;
  });
}

module.exports = { getAll, getOne, create, update, remove };
