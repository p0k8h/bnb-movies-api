import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingSchema = new Schema({
  userID: {
    type: ObjectId,
    ref: "User"
  },
  showID: {
    type: ObjectId,
    ref: "Show"
  },
  booking_date: Date
});

export default mongoose.model("Booking", BookingSchema);
