import { Schema, model } from "mongoose";

const sessionSchema = Schema({
  massage: {
    type: String,
    required: [true, "Який буде масаж?"],
    default: "Релакс спина",
  },
  duration: {
    type: String,
    required: [true, "Скіко триватиме?"],
  },
  scheduledDate: {
    type: String,
    required: [true, "Якого числа?"],
  },
  scheduledTime: {
    type: String,
    required: [true, "О котрій?"],
  },
});

const Session = model("Session", sessionSchema);
export default Session;
