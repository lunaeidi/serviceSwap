const User=require('../models').User;

module.exports= {
  create(req,res){
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        address: req.body.address
      })
      .then(user=>res.status(201).send(user))
      .catch(error=>res.status(400).send(error))
  },
  index(req,res){
    return User
      .all()
      .then(user=>res.status(200).send(user))
      .catch(error=>res.status(400).send(error))
  }
}
