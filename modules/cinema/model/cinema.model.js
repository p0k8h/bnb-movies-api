import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  poster_link: {
    type: String,
    required: true
  },
});

export default mongoose.model("cinema", cinemaSchema);
