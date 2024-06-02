const Experiencia = require("../model/experiencias.model");
const getExperiencias = async (req, res) => {
  try {
    const allExperiencias = await Experiencia.find();
    return res.status(200).json(allExperiencias);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postExperiencia = async (req, res) => {
  try {
    const newExperiencia = new Experiencia(req.body);
    const createdExperiencia = await newExperiencia.save();

    return res.status(201).json(createdExperiencia);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putExperiencia = async (req, res) => {
  // console.log(req.params);
  try {
    const { id } = req.params;
    const putExperiencia = new Experiencia(req.body);
    putExperiencia._id = id;
    const updatedExperiencia = await Experiencia.findByIdAndUpdate(
      id,
      putExperiencia
    );
    if (!updatedExperiencia) {
      return res.status(404).json({ message: "el id de este libro no existe" });
    }
    return res.status(200).json(updatedExperiencia);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getExperiencias, postExperiencia, putExperiencia };
