import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Route Imports
import { errorHandler } from "./middleware/error.middleware.js";
import userRoute from "./routes/user.routes.js";

// Routes
app.use("/api/users", userRoute);

// Error Handling Middleware (should be the last middleware)
app.use(errorHandler);

export { app };
