const { Schema, model, Types } = require('mongoose');
const format = require('date-fns/format');

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
        default: Date.now,
        get: formatDate
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
            default: Date.now,
            get: formatDate
        },
      }
    ],
    
  },
  {
    //make sure the virtuals and getters are included in responses, etc.
    toJSON: {
     virtuals: true,
     getters: true
    },
    id: false,
   } 
);

// Create a virtual property `reactionCount` that gets the number of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  try {
    return this.reactions.length;
  } catch (error) {
    
  }
  
});
// Change the default format of the date
function formatDate(date) {
  return format(new Date(date), 'PPPppp')
};
  
const Thought = model('thought', thoughtSchema);

module.exports = { Thought };
