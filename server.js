import express from "express";
import dotenv from "dotenv";
import clientRoute from "./routes/clients-route.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("Conneted to database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.use("/clients", clientRoute);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
