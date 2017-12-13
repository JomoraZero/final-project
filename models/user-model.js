const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please tell us your name']
    },
    username: {
      type: String,
      required: [true, 'Username required']
    },
    encryptedPassword: {
      type: String,
      required: [true, 'Encrypted password is empty']
    },
    portalKey: {
      type: String,
      required: [true, 'Key is needed! Ask Nizar!']
    }
  },
  {
  timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
