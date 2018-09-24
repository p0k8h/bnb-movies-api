import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const showSchema = new Schema({
  show_time: {
    type: Date
  },
});

export default mongoose.model("show", showSchema);
