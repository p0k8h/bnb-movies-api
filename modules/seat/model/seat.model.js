import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SeatSchema = new Schema({
  seat_no: {
    type: String
  },
  seat_status: {
    type: String,
    enum: ["Booked", "Available"]
  }
});

export default mongoose.model("Seat", SeatSchema);
