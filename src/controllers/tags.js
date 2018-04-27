const model = require('../models/tags');

function getAll (req, res, next) {
  model.getAll()
  .then((data) => {
    res.status(200).send({data});
  })
  .catch(next)
}

function getOne (req, res, next) {
  const tag = model.getOne(req.params.id);
  if (tag.data) {
    res.status(200).send({ data: tag.data });
  } else if (tag.error) {
    return next({ status: 404, message: tag.error });
  }
}

module.exports = { getAll, getOne };
