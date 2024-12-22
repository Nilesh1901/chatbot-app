import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    chat: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);
export default User;
