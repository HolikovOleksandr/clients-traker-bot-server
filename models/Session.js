const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
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

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
