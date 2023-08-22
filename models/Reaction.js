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

// Create a virtual property `reactionCount` that gets the amount of comments per post
reactionSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
