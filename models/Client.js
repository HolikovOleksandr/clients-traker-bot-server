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
  phone: {
    type: String,
    require: [true, "Та номер телефону"],
  },
  sessions: Array,
});

const Client = model("Client", clientSchema);
export default Client;
