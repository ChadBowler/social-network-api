const { Schema, model, Types } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        requried: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: Schema.Types.String,
        ref: 'user',
        required: true
    },
    reactions: [
        {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            requried: true,
            maxLength: 280
        },
        username: {
            type: Schema.Types.String,
            ref: 'user',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
      }
    ],
    
  },
  {
    toJSON: {
     virtuals: true,
    },
    id: false,
   } 
);

//TODO: create a getter method to format the timestamp on query(reaction, and thought)

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = { Thought };
