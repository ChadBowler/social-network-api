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
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
      }]
  },
);

// Create a virtual property `friendCount` that gets the amount of friends per post
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
