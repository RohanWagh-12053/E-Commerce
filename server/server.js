import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// create a database connection : u can also create separate file for this

mongoose
  .connect(
    `mongodb+srv://rohanuser:rohanuser1205@clusterecommerce.7bueywq.mongodb.net/ecommerce?appName=ClusterEcommerce`,
  )
  .then(() => console.log("MongoDB Connected Succesfully 🚀"))
  .catch((error) => console.log("Error Connecting To DB ☠️", error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5174/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorzation",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () =>
  console.log("Server is Running on Port ", PORT, " 🔥🔥"),
);
