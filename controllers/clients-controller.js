import Client from "../models/Client.js";

// =======================
// ===== C R E A T E =====
// =======================
export const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// =======================
// ===== U P D A T E =====
// =======================
export const updateClient = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findByIdAndUpdate(id, req.body);

    if (!client) {
      res.status(404).json({ message: "Здаєтся такого клієнта нема..." });
    }

    res.status(200).json(client);
  } catch (error) {
    s;
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// =======================
// ===== D E L E T E =====
// =======================
export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ===================
// ===== R E A D =====
// ===================
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
// ===========================
// ===== R E A D   A L L =====
// ===========================
export const getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
