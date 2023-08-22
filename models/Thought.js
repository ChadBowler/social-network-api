const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
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
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      }],
    
  },
  
);

// Create a virtual property `reactionCount` that gets the amount of comments per post
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
