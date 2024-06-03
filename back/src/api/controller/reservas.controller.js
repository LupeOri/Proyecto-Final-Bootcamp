const Reserva = require("../model/reservas.model");
const getReservas = async (req, res) => {
  try {
    const allReservas = await Reserva.find();
    return res.status(200).json(allReservas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postReserva = async (req, res) => {
  try {
    const newReserva = new Reserva(req.body);
    const createdReserva = await newReserva.save();

    return res.status(201).json(createdReserva);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putReserva = async (req, res) => {
  // console.log(req.params);
  try {
    const { id } = req.params;
    const putReserva = new Reserva(req.body);
    putReserva._id = id;
    const updatedReserva = await Reserva.findByIdAndUpdate(id, putReserva);
    if (!updatedReserva) {
      return res
        .status(404)
        .json({ message: "el id de esta reserva no existe" });
    }
    return res.status(200).json(updatedReserva);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReserva = await Reserva.findByIdAndDelete(id);
    if (!deletedReserva) {
      return res
        .status(404)
        .json({ message: "el id de esta reserva no existe" });
    }
    return res.status(200).json(deletedReserva);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getReservas,
  postReserva,
  putReserva,
  deleteReserva,
};
