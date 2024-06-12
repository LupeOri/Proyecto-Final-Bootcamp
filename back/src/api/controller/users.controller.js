const User = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);
    console.log(req.body);

    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return new Error("This email has already been used.");
    }
    const userDB = await user.save();
    return res.status(201).json({
      status: 201,
      message: `User ${userDB.email} created`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    console.log(bcrypt.compareSync(req.body.password, userInfo.password));
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
      );

      return res.status(200).json({
        data: { message: "ok", user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: "Invalid credentials",
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return next(error);
  }
};

const myReservas = async (req, res) => {
  try {
    const userId = req.query.id;
    // const allReservas = await Reserva.find().populate("experiencias");
    const allReservas = await User.findById(userId)
      .populate("reservas")
      .populate("reservas.experiencia", "experiencia fecha estado total");
    console.log(userId);
    return res.status(200).json(allReservas);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const myValoraciones = async (req, res) => {
  try {
    const allValoraciones = await User.find().populate("valoraciones");
    return res.status(200).json(allValoraciones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { register, login, logout, myValoraciones, myReservas };
