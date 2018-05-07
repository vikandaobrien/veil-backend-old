const model = require('../models/users');

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
      throw { status: 404, message: 'User not found' }
    }
  })
  .catch(next);
}

function create (req, res, next) {
  if(!req.body.email || !req.body.password || !req.body.fname || !req.body.lname || !req.body.birthday || !req.body.location || !req.body.timezone ){
    return next({ status: 400, message: 'Incomplete information'});
  }

  model.create(req.body.email, req.body.password, req.body.fname, req.body.lname, req.body.birthday, req.body.location, req.body.timezone, req.body.role, req.body.image, req.body.info)
  .then(function(data){
    return res.status(201).send({ data });
  })
  .catch(next);
}

module.exports = { getAll, getOne, create };
