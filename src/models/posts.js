const shortid = require('shortid')
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'posts.json');

function getAll () {
  const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
  return { data: posts };
}

function getOne (id) {
  const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const post = posts.find(post => post.id === id);

  if (post) {
    return { data: post };
  } else {
    return { error: 'Post not found' };
  }
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
