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
    profileImage: {
      type: String,
      default: '/images/default.jpg'
    }
  },
  {
  timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
