import Client from "../models/Client.js";

export const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {};

export const deleteClient = async (req, res) => {};

export const getAllClients = async (req, res) => {
  try {
    const hotels = await Client.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const hotels = await Client.findById(req.params.id);
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
