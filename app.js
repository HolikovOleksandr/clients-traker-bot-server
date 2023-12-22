const express = require("express");
const app = express();

import clientsRouter from "clients/clients-router";

app.use(express.json());
app.use("/clients", clientsRouter);

export default app;
