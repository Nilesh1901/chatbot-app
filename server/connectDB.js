import mongoose from "mongoose";

export async function connectDB() {
  return mongoose.connect(process.env.MONGODB_URI);
}
