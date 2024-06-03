const Reserva = require("../model/reservas.model");
const getReservas = async (req, res) => {
  try {
    // const allReservas = await Reserva.find().populate("experiencias");
    const allReservas = await Reserva.find().populate(
      "experiencias",
      "experiencia fecha estado total"
    ); // Hemos comentado la linea anterior para que no pinte toda la información (por ejemplo el "__v"). En esta linea, después del populate("experiencias"), le estamos diciendo que nos pinte los campos "experiencia fecha estado total". Esto se escribe sin coma).
    return res.status(200).json(allReservas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getReservaById = async (req, res) => {
  try {
    const { id } = req.params; // El uso de const {id} es igual a const id = req.params.id
    const reserva = await Reserva.findById(id).populate(
      "experiencias",
      "experiencia fecha estado total"
    );
    return res.status(200).json(reserva);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postReserva = async (req, res) => {
  try {
    const newReserva = new Reserva(req.body);
    const createdReserva = await newReserva
      .save()
      .populate("experiencias", "experiencia fecha estado total");

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
    const updatedReserva = await Reserva.findByIdAndUpdate(
      id,
      putReserva
    ).populate("experiencias", "experiencia fecha estado total");
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
    const deletedReserva = await Reserva.findByIdAndDelete(id).populate(
      "experiencias",
      "experiencia fecha estado total"
    );
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
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
};
