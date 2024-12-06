import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"; // Ensure this path is correct
import cors from "cors";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.mongodbURI;

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
