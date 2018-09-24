import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MovieSchema = new Schema({
  theatreID: {
    type: ObjectId,
    ref: "Theatre"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  run_time: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  cast: {
    type: String,
    required: true
  },
  trailer_link: {
    type: String,
    required: true
  },
  poster_link: {
    type: String,
    required: true
  },
  cinemas: {
    type: Array,
    default: []
  },
  shows: {
    type: Array,
    default: []
  }
});

export default mongoose.model("Movie", MovieSchema);
