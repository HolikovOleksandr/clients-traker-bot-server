import express from "express";
import dotenv from "dotenv";
import clientRoute from "./routes/clients-route.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use("/api/clients", clientRoute);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("Conneted to database");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnectrd!");
});

app.listen(port, () => {
  dbConnection();
  console.log(`Server was runningn on ${port}`);
});
