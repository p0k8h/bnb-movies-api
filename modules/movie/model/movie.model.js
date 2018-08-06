import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MovieSchema = new Schema({
  theatreID: {
    type: ObjectId,
    ref: "Theatre"
  },
  movie_name: {
    type: String,
    required: true
  },
  movie_description: {
    type: String,
    required: true
  },
  movie_release_date: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Movie", MovieSchema);
