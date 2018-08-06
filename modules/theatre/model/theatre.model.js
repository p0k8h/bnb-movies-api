import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TheatreSchema = new Schema({
  theatre_name: {
    type: String
  },
  theatre_address: {
    type: String
  },
  movieID: {
    type: ObjectId,
    ref: "Movie"
  }
});

export default mongoose.model("Theatre", TheatreSchema);
