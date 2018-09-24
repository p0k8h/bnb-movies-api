import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
});

export default mongoose.model("cinema", cinemaSchema);
