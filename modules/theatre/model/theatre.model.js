import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TheatreSchema = new Schema({
  theatre_name: {
    type: String
  },
  theatre_address: {
    type: String
  }
});

export default mongoose.model("Theatre", TheatreSchema);
