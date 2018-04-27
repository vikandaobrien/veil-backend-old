const model = require('../models/tags');

function getAll (req, res, next) {
  model.getAll()
  .then(data => {
    res.status(200).send({data});
  })
  .catch(next);
}

function getOne (req, res, next) {
  model.getOne(parseInt(req.params.id))
  .then(data => {
    if (data) {
      return res.status(200).send({ data })
    }
    else {
      throw { status: 404, message: 'Tag not found' }
    }
  })
  .catch(next);
}

module.exports = { getAll, getOne };
