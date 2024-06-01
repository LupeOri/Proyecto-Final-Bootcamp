const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectando a la base de datos ${name} DB en el host ${host}`);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error);
  }
};

module.exports = { connect };
