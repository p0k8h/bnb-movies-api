import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ShowSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  role: {
    type: Boolean,
    enum: [1, 2],
    default: 2 // 1/2 - admin/client
  },
  active_status: {
    type: Boolean,
    default: true
  },
  passwordResetToken: String,
  passwordResetExpires: Number
});

export default mongoose.model("Show", ShowSchema);
