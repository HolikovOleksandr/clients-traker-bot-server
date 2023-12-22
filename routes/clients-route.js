import express from "express";
import {
  createClient,
  updateClient,
  deleteClient,
  getAllClients,
  getClient,
} from "../controllers/clients-controller.js";

const router = express.Router();

router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.get("/", getAllClients);
router.get("/:id", getClient);

export default router;
