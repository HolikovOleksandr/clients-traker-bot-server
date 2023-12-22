const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  massage: {
    type: String,
    required: [true, "Який буде масаж?"],
    default: "Релакс спина",
  },
  scheduledDate: {
    type: Date,
    required: [true, "Якого числа?"],
    default: Date.now,
  },
  scheduledTime: {
    type: String,
    required: [true, "О котрій?"],
    default: "13:30",
  },
});

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
