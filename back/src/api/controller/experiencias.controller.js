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

module.exports = { getExperiencias, postExperiencia };
