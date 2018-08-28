const Message=require('../models').Message;

module.exports= {
  create(req,res){
    return Message
      .create({
        title: req.body.title,
      })
      .then(message=>res.status(201).send(message))
      .catch(error=>res.status(400).send(error))
  },
  index(req,res){
    return Message
      .all()
      .then(message=>res.status(200).send(messages))
      .catch(error=>res.status(400).send(error))
  }
}
