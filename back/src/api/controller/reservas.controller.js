const Reserva = require("../model/reservas.model");
const getReservas = async (req, res) => {
  try {
    // const allReservas = await Reserva.find().populate("experiencias");
    const allReservas = await Reserva.find().populate(
      "experiencia"
      // "experiencia fecha estado total"
    );
    // .populate("usuario", "nombre email");
    // Hemos comentado la linea anterior para que no pinte toda la información (por ejemplo el "__v"). En esta linea, después del populate("experiencias"), le estamos diciendo que nos pinte los campos "experiencia fecha estado total". Esto se escribe sin coma).
    return res.status(200).json(allReservas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getReservaById = async (req, res) => {
  try {
    const { id } = req.params; // El uso de const {id} es igual a const id = req.params.id
    const reserva = await Reserva.findById(id)
      .populate("experiencia", "experiencia fecha estado total")
      .populate("usuario", "nombre email");
    return res.status(200).json(reserva);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postReserva = async (req, res) => {
  try {
    // console.log(req.body);
    const newReserva = new Reserva(req.body);
    const createdReserva = await newReserva.save();
    // .populate("experiencia", "experiencia fecha estado total");

    return res.status(201).json(createdReserva);
  } catch (error) {
    // console.log(error);
    return res.status(500).json(error);
  }
};

// const changeReserva = async (req, res) => {
//   try {
//     const changedReserva = await User.findByIdAndUpdate(
//       createdReserva.usuario,
//       {
//         $push: { reservas: createdReserva._id },
//       }
//     );

//     const populatedReserva = await Reserva.findById(createdReserva._id)
//       .populate("experiencia", "experiencia fecha estado total")
//       .populate("usuario", "nombre email");
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

const putReserva = async (req, res) => {
  //console.log(req.params)
  try {
    const { id } = req.params;
    const updatedReserva = await Reserva.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("experiencia");
    if (!updatedReserva) {
      return res
        .status(404)
        .json({ message: "El ID de esta reserva no existe" });
    }

    return res.status(200).json(updatedReserva);
  } catch (error) {
    console.log(error);
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

const postPago = async (req, res) => {
  try {
    // console.log(req.body);
    const newPago = new Pago(req.body);
    // .populate("experiencia", "experiencia fecha estado total");
    console.log("Ok");
    return res
      .status(201)
      .json({ data: { message: "ok", user: userInfo, token: token } });
  } catch (error) {
    // console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  getReservas,
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
  postPago,
};
