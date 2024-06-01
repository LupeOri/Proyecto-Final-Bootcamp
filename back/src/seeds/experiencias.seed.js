const mongoose = require("mongoose");
require("dotenv").config();
const Experiencia = require("../api/model/experiencias.model");

const DB_URL = process.env.DB_URL;

const arrayExperiencias = [
  {
    titulo: "Cena Gourmet en la Ciudad",
    descripcion:
      "Disfruta de una cena de cinco tiempos con maridaje de vinos en un restaurante exclusivo.",
    ubicacion: "Ciudad de México, México",
    precio: "150 USD",
    duracion: "3 horas",
    categoria: "cena",
    anfitrion: "Chef Alejandro López",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/cena_gourmet.jpg",
  },
  {
    titulo: "Cata de Vinos en Viñedo Local",
    descripcion:
      "Explora el mundo del vino con una cata guiada en un hermoso viñedo.",
    ubicacion: "Valle de Guadalupe, México",
    precio: "80 USD",
    duracion: "2 horas",
    categoria: "cata",
    anfitrion: "Sommelier Laura García",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/cata_vinos.jpg",
  },
  {
    titulo: "Tour Histórico por el Centro",
    descripcion:
      "Recorre los lugares históricos más emblemáticos del centro de la ciudad.",
    ubicacion: "Madrid, España",
    precio: "40 USD",
    duracion: "4 horas",
    categoria: "tour",
    anfitrion: "Guía Juan Pérez",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/tour_historico.jpg",
  },
  {
    titulo: "Clase de Cocina Mexicana",
    descripcion:
      "Aprende a preparar auténticos platillos mexicanos con ingredientes frescos.",
    ubicacion: "Guadalajara, México",
    precio: "70 USD",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Chef Mariana Ruiz",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/clase_cocina.jpg",
  },
  {
    titulo: "Fiesta en la Playa",
    descripcion:
      "Disfruta de una noche inolvidable con música, baile y bebidas en la playa.",
    ubicacion: "Cancún, México",
    precio: "50 USD",
    duracion: "5 horas",
    categoria: "fiesta",
    anfitrion: "DJ Carlos Martínez",
    valoraciones: "4.6",
    imagenes: "https://example.com/images/fiesta_playa.jpg",
  },
  {
    titulo: "Excursión a la Montaña",
    descripcion:
      "Vive una aventura en la montaña con actividades al aire libre y vistas espectaculares.",
    ubicacion: "Bogotá, Colombia",
    precio: "90 USD",
    duracion: "6 horas",
    categoria: "tour",
    anfitrion: "Guía Andrea Torres",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/excursion_montana.jpg",
  },
  {
    titulo: "Clase de Pintura al Aire Libre",
    descripcion:
      "Exprésate artísticamente en una clase de pintura en un parque hermoso.",
    ubicacion: "Barcelona, España",
    precio: "60 USD",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Artista Sofía Hernández",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/clase_pintura.jpg",
  },
  {
    titulo: "Cata de Cervezas Artesanales",
    descripcion:
      "Descubre y degusta una variedad de cervezas artesanales locales.",
    ubicacion: "Bruselas, Bélgica",
    precio: "55 USD",
    duracion: "2 horas",
    categoria: "cata",
    anfitrion: "Maestro Cervecero Tomás Verhoeven",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/cata_cervezas.jpg",
  },
  {
    titulo: "Tour en Bicicleta por la Ciudad",
    descripcion:
      "Conoce la ciudad de una manera diferente con un tour guiado en bicicleta.",
    ubicacion: "Ámsterdam, Países Bajos",
    precio: "30 USD",
    duracion: "3 horas",
    categoria: "tour",
    anfitrion: "Guía Emma Jansen",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/tour_bicicleta.jpg",
  },
  {
    titulo: "Noche de Jazz en Vivo",
    descripcion:
      "Sumérgete en el mundo del jazz con una noche de música en vivo.",
    ubicacion: "Nueva Orleans, EE.UU.",
    precio: "45 USD",
    duracion: "4 horas",
    categoria: "fiesta",
    anfitrion: "Banda Jazz & Soul",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/noche_jazz.jpg",
  },
];

mongoose.connect(DB_URL).then(async () => {
  const allExperiencias = await Experiencia;.find()
  if (allExperiencias.length > 0 ){
    await Experiencia.collection.drop();
    console.log("Experiencias borradas")
  }
}).catch((error)=>console.log("error borrando experiencias", error)).then(async()=>{
    const experienciaMap = arrayExperiencias.map((experiencia)=> new Experiencia(experiencia));
    await Experiencia.insertMany(experienciaMap);
    console.log("Experiencias creadas");
}).catch((error)=>console.log("error insertando experiencias", error)).finally(()=>mongoose.disconnect());