const db = require('../../db');

const shortid = require('shortid')
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'posts.json');

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

function create (body) {
  const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const title = body.title;
  const content = body.content;

  if (title && content) {
    const post = { id: shortid.generate(), title, content };
    posts.push(post);
    const json = JSON.stringify(posts);
    fs.writeFileSync(file, json);
    return { data: post };
  } else {
    return { error: 'Title and content required' };
  }
}

function update (id, body) {
  const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const post = posts.find(post => post.id === id);

  if (post) {
    const title = body.title;
    const content = body.content;

    if (title || content) {
      if (title) post.title = title;
      if (content) post.content = content;
      const json = JSON.stringify(posts);
      fs.writeFileSync(file, json);
      return { data: post };
    } else {
      return { error: 'No title or content entered' };
    }
  } else {
    return { error: 'Post not found' };
  }
}

function remove (id) {
  let posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const post = posts.find(post => post.id === id);

  if (post) {
    posts = posts.filter(post => post.id !== id);
    delete post.id;
    const json = JSON.stringify(posts);
    fs.writeFileSync(file, json);
    return { data: post };
  } else {
    return { error: 'Post not found' };
  }
}

module.exports = { getAll, getOne, create, update, remove };
