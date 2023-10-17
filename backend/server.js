import express from "express";
const app = express();
import dotenv from "dotenv";
import db from "./config/db.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught expection");
  process.exit(1);
});

// Connecting to database
// Import all routes
import productRoutes from "./routes/productRoutes.js";
import errorMiddleware from "./middleware/errors.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// app.use(morgan());

dotenv.config();

db();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", orderRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
