import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingSchema = new Schema({
  user_id: {
    type: ObjectId,
    ref: "User"
  },
  booking_date: Date,
  show_id: {
    type: ObjectId,
    ref: "Show"
  }
});

export default mongoose.model("Movie", BookingSchema);
