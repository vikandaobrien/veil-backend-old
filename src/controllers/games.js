const model = require('../models/games');

function getAll (req, res, next) {
  model.getAll()
  .then((data) => {
    res.status(200).send({data});
  })
  .catch(next)
}

function getOne (req, res, next) {
  const game = model.getOne(req.params.id);
  if (game.data) {
    res.status(200).send({ data: game.data });
  } else if (game.error) {
    return next({ status: 404, message: game.error });
  }
}

module.exports = { getAll, getOne };
