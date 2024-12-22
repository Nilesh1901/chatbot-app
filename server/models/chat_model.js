import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      enum: ["user", "bot"], // Restrict values to "user" or "bot"
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: [messageSchema],
  },
  { timestamps: true }
);

const Chat = new mongoose.model("Chat", chatSchema);

export default Chat;
