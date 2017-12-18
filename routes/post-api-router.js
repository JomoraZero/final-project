const express = require("express");

const Post = require("../models/post-model");

const router = express.Router();

router.get("/albums", (req, res, next) => {
  Post
  .find()
  .sort({albumTitle: 1})
  .exec()
  .then((postResults) => {

    res.status(200).json(postResults);
  })
  .catch((err) => {
    console.log("GET/Post ERROR!!");
    console.log(err);

    res.status(500).json({ error: "Album list database error!" });
  });
}); // GET /albums


router.post("/albums", (req, res, next) => {
  const thePost = new Post({
    albumTitle: req.body.albumTitle,
    artist: req.body.artist,
    firstTrack: req.body.firstTrack,
    firstTrackSpotify: req.body.firstTrackSpotify,
    lastTrack: req.body.lastTrack,
    lastTrackSpotify: req.body.lastTrackSpotify,
    genre: req.body.genre,
    owner: req.user._id
  });

  return thePost.save()

  .then(() => {
    res.status(200).json(thePost);
  })
  .catch((err) => {
    console.log("POST/Post ERROR!!");
    console.log(err);

    if(err.errors) {
      res.status(400).json(err.errors);
    }
    else {
      res.status(500).json({error: "Post save database error!"});
    }
  });
}); // POST /albums

router.get("/albums/:id", (req, res, next) => {
  if (req.user === undefined) {
    res.status(400).json({ error: "Not logged in" });
    return;
  }
  Post.findById(req.params.id)
  .populate('owner')
  .then((postFromDb) => {
    if (postFromDb === null) {
      res.status(404).json({ error: "Drink not found" });
    }
    else{
      res.status(200).json(postFromDb);
    }
  })
  .catch((err) => {
    console.log("GET/Albums/:id ERROR!!");
    console.log(err);

    res.status(500).json({ error: "Album details database error!"});
  });
}); // GET /albums/:id



module.exports = router;
