const userModel = require('../models/users');

function create (req, res, next) {
  if(!req.body.email || !req.body.password || !req.body.fname || !req.body.lname || !req.body.birthday || !req.body.location || !req.body.timezone ){
    return next({ status: 400, message: 'Incomplete information'});
  }

  userModel.create(req.body.email, req.body.password, req.body.fname, req.body.lname, req.body.birthday, req.body.location, req.body.timezone, req.body.role, req.body.image, req.body.info)
  .then(function(data){
    return res.status(201).send({ data });
  })
  .catch(next)
}

module.exports = {
  create
}
