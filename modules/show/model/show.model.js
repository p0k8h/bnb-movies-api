import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ShowSchema = new Schema({
  show_date: {
    type: Date
  },
  show_timings: {
    type: Date
  }
});

export default mongoose.model("Show", ShowSchema);
