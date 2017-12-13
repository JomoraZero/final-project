const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
.then(() => {
  console.log("Mongoose is connected! 🐕");
})
.catch((err) => {
  console.log("Mongoose FAILED! ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️");
  console.log(err);
});
