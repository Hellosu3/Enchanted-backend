const mongoose = require('mongoose')
///////////////////////////////
// MODELS
////////////////////////////////


const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    friend: { type: String },
    message: { type: String }
  
  });
   
  


const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;