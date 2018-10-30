import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SeatSchema = new Schema({
  movieID: {
    type: ObjectId
  },
  cinemaID: {
    type: ObjectId
  },
  show_time: {
    type: String
  },
  selectedSeats: [Array]
});

export default mongoose.model("Seat", SeatSchema);
