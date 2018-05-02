const model = require('../models/posts');

function getAll (req, res, next) {
  model.getAll()
  .then(data => {
    res.status(200).send({data});
  })
  .catch(next)
}

function getOne (req, res, next) {
  model.getOne(parseInt(req.params.id))
  .then(data => {
    if (data) {
      return res.status(200).send({ data });
    }
    else {
      throw { status: 404, message: 'Post not found' };
    }
  })
  .catch(next);
}

function create (req, res, next) {
  console.log(req.body)
  if (!req.body.title || !req.body.content) {
    return next({ status: 400, message: 'Bad request'});
  }
  model.create(req.body.title, req.body.image, req.body.content, req.body.user_id)
  .then(data => {
    res.status(201).send({ data });
  })
  .catch(next);
}

function update (req, res, next) {
  if (!req.body.title || !req.body.content) {
    return next({ status: 400, message: 'Bad request'});
  }
  model.update(parseInt(req.params.id), req.body.title, req.body.image, req.body.content)
  .then(data => {
    res.status(200).send({ data });
  })
  .catch(next);
}

function remove (req, res, next) {
  model.remove(parseInt(req.params.id))
  .then(data => {
    res.status(200).send({ data });
  })
  .catch(next);
}

module.exports = { getAll, getOne, create, update, remove };
