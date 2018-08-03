import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SeatSchema = new Schema({
  show_id: {
    type: ObjectId,
    ref: "Show"
  },
  booking_id: {
    type: ObjectId,
    ref: "Booking"
  },
  theatre_id: {
    type: ObjectId,
    ref: "Theatre"
  },
  seat_status: {
    type: String,
    enum: ["Booked", "Available"]
  }
});

export default mongoose.model("Seat", SeatSchema);
