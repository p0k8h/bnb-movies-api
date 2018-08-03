import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MovieSchema = new Schema({
  movie_name: String,
  movie_description: String,
  movie_release_date: {
    type: Date
  }
});

export default mongoose.model("Movie", MovieSchema);
