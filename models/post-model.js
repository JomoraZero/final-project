const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    albumTitle: {
      type: String,
      required: [true, 'Please give us an album title.']
    },
    artist: {
      type: String,
      required: [true, 'Who performed the album?']
    },
    firstTrack: {
      type: String,
      required: [true, 'What is the first track on the album?']
    },
    firstTrackSpotify: {
      type: String
    },
    lastTrack: {
      type: String,
      required: [true, 'What is the last track on the album?']
    },
    lastTrackSpotify: {
      type: String
    },
    genre: {
      type: String,
      required: [true, 'Genre is required.']
    },
    owner: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'User'
    }
  },
  {
  timestamps: true
  }
);

const User = mongoose.model("Post", postSchema);

module.exports = User;
