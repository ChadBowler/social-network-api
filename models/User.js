const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        uniqe: true,
        requried: true,
        trim: true
    
    },
    email: {
        type: String,
        unique: true,
        required: [true, "User email is required."],
        validate: {
            validator: function(v) {
                return /([!@#%^&*()_+-=\[\]{}\|;':",.\/<>?~`a-zA-Z0-9]{1,64})(?:@)([-.a-zA-Z0-9]{1,253})(?:\.)([a-zA-Z0-9]{2,})/.test(v)
            }
        }

    },
    thoughts: [],
    friends: []
  },
  
);

// Create a virtual property `commentCount` that gets the amount of comments per post
userSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const User = model('user', userSchema);

module.exports = User;
