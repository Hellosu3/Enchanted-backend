const db = require('../models');

// INDEX ROUTE
const getMessage = (req, res) => {
  db.Message.find({})
    .then((foundMessage) => {
      if (!foundMessage) {
        res.status(404).json({ message: 'Cannot find messages' });
      } else {
        res.status(200).json({ data: foundMessage });
      }
    })
};

const createMessage = (req, res) => {
  // db.People.create({name: 'testing'})
  // .then((res) => {console.log(res)})
  // res.send('createPeople')
  db.Message.create(req.body)
  .then((createdMessage) => {
      if(!createdMessage){
          res.status(400).json({message: 'Cannot create Message'})
      } else {
          res.status(201).json({data: createdMessage, message: 'Message created'})
      }
  })
}
// UPDATE ROUTE
const updateMessage = (req, res) => {
  db.Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedMessage) => {
      if (!updatedMessage) {
        res.status(400).json({ message: 'Could not update message' });
      } else {
        res.status(200).json({ data: updatedMessage, message: 'Message updated' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

// DESTROY ROUTE
const deleteMessage = (req, res) => {
  db.Message.findByIdAndDelete(req.params.id)
    .then((deletedMessage) => {
      if (!deletedMessage) {
        res.status(400).json({ message: 'Could not delete message' });
      } else {
        res.status(200).json({ data: deletedMessage, message: 'Message deleted' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

module.exports = {
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
}

