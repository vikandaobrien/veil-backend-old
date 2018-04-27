const model = require('../models/posts');

function getAll (req, res, next) {
  model.getAll()
  .then((data) => {
    res.status(200).send({data});
  })
  .catch(next)
}

function getOne (req, res, next) {
  const post = model.getOne(req.params.id);
  if (post.data) {
    res.status(200).send({ data: post.data });
  } else if (post.error) {
    return next({ status: 404, message: post.error });
  }
}

function create (req, res, next) {
  const post = model.create(req.body);
  if (post.data) {
    res.status(201).send({ data: post.data });
  } else if (post.error) {
    return next({ status: 400, message: post.error });
  }
}

function update (req, res, next) {
  const post = model.update(req.params.id, req.body);
  if (post.data) {
    res.status(200).send({ data: post.data });
  } else if (post.error) {
    return next({ status: 400, message: post.error });
  }
}

function remove (req, res, next) {
  const post = model.remove(req.params.id);
  if (post.data) {
    res.status(200).send({ data: post.data });
  } else if (post.error) {
    return next({ status: 404, message: post.error });
  }
}

module.exports = { getAll, getOne, create, update, remove };
