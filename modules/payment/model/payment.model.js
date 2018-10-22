import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PaymentSchema = new Schema({
  payment_data: {
    type: Date
  },
  payment_amount: {
    type: Number
  },
  payment_description: {
    type: String
  }
});

export default mongoose.model("Payment", PaymentSchema);
