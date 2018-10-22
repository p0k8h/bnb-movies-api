import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
    // select: false
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  role: {
    type: Number,
    enum: [1, 2],
    default: 2 // 1/2 - admin/client
  },
  dob: {
    type: String
  },
  gender: {
    type: String,
    enum: ["male", "female"]
  },
  active_status: {
    type: Boolean,
    default: true
  },
  passwordResetToken: String,
  passwordResetExpires: Number
});

/**
 * Password hash middleware.
 */
userSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.verifyPassword = function verifyPassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

export default mongoose.model("user", userSchema);
