const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionBody: {
        type: String,
        requried: true,
        minLength: 1,
        maxLength: 280
    
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
  },
  
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
