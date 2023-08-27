const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        uniqe: true,
        required: true,
        lowercase: true,
        trim: true,
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
  {
   toJSON: {
    virtuals: true,
    getters: true
   },
   id: false,
  }
);

// Create a virtual property `friendCount` that gets the amount of friends the user has
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

userSchema.pre('save', function (next) {
  this.username = this.username.replace(" ", "");
  next();
});

const User = model('user', userSchema);

module.exports = { User };
