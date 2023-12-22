const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Введіть им`я кліента"],
  },
  surname: {
    type: String,
    require: [true, "Введіть прізвище кліента"],
  },
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      require: false,
      default: [],
    },
  ],
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
