import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";
import productRouter from "./routes/product_route.js";
import userRouter from "./routes/user_route.js";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allows cookies and credentials
    allowedHeaders: ["Content-Type", "Authorization"], // Explicitly include Authorization
  })
);
app.use(express.json());

// connecting to the database
connectDB()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);

app.use(express.json());

app.listen(port, () => console.log(`server is listening of port: ${port}`));
