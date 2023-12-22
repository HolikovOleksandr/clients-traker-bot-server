import { Schema, model } from "mongoose";

const clientSchema = Schema({
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
      type: Schema.Types.ObjectId,
      ref: "Session",
      require: false,
      default: [],
    },
  ],
});

const Client = model("Client", clientSchema);
export default Client;

