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
    precio: "40 EUR",
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
    precio: "60 EUR",
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
    precio: "55 EUR",
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
    precio: "30 EUR",
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
  {
    titulo: "Tour en Kayak por la Bahía",
    descripcion:
      "Explora la belleza natural de la bahía mientras remas en kayak.",
    ubicacion: "Sydney, Australia",
    precio: "120 AUD",
    duracion: "4 horas",
    categoria: "tour",
    anfitrion: "Guía Emma Smith",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/kayak_bahia.jpg",
  },
  {
    titulo: "Degustación de Sushi",
    descripcion:
      "Prueba una selección de sushi fresco y exquisito en un restaurante japonés.",
    ubicacion: "Tokio, Japón",
    precio: "10000 JPY",
    duracion: "2 horas",
    categoria: "cena",
    anfitrion: "Chef Hiroshi Tanaka",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/degustacion_sushi.jpg",
  },
  {
    titulo: "Excursión a la Gran Barrera de Coral",
    descripcion:
      "Sumérgete en las aguas cristalinas y explora la vida marina de la Gran Barrera de Coral.",
    ubicacion: "Cairns, Australia",
    precio: "200 AUD",
    duracion: "8 horas",
    categoria: "tour",
    anfitrion: "Buzo experto Katie Johnson",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/excursion_barrera_coral.jpg",
  },
  {
    titulo: "Clase de Sushi",
    descripcion:
      "Aprende a preparar sushi auténtico con un chef japonés experto.",
    ubicacion: "Osaka, Japón",
    precio: "8000 JPY",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Chef Satoshi Yamamoto",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/clase_sushi.jpg",
  },
  {
    titulo: "Fiesta en la Azotea con Vistas Panorámicas",
    descripcion:
      "Disfruta de una noche de música y cócteles con vistas impresionantes desde una azotea.",
    ubicacion: "Nueva York, Estados Unidos",
    precio: "80 USD",
    duracion: "4 horas",
    categoria: "fiesta",
    anfitrion: "DJ Sarah Johnson",
    valoraciones: "4.6",
    imagenes: "https://example.com/images/fiesta_azotea.jpg",
  },
  {
    titulo: "Tour de Chocolate",
    descripcion:
      "Descubre los secretos detrás del proceso de fabricación del chocolate en una fábrica local.",
    ubicacion: "Zurich, Suiza",
    precio: "90 CHF",
    duracion: "2 horas",
    categoria: "tour",
    anfitrion: "Maestro Chocolatero Hans Müller",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/tour_chocolate.jpg",
  },
  {
    titulo: "Taller de Fotografía Urbana",
    descripcion:
      "Captura la esencia de la ciudad en un taller de fotografía dirigido por un fotógrafo profesional.",
    ubicacion: "Londres, Reino Unido",
    precio: "70 GBP",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Fotógrafo Alex Turner",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/taller_fotografia.jpg",
  },
  {
    titulo: "Cena en el Sky Tower",
    descripcion:
      "Disfruta de una cena gourmet en el restaurante giratorio más alto del mundo, con vistas panorámicas de la ciudad.",
    ubicacion: "Auckland, Nueva Zelanda",
    precio: "200 NZD",
    duracion: "2 horas",
    categoria: "cena",
    anfitrion: "Chef Sophie Williams",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/cena_sky_tower.jpg",
  },
  {
    titulo: "Tour de Tapas por el Barrio Gótico",
    descripcion:
      "Descubre la deliciosa gastronomía local con un tour de tapas por el pintoresco Barrio Gótico.",
    ubicacion: "Barcelona, España",
    precio: "50 EUR",
    duracion: "3 horas",
    categoria: "tour",
    anfitrion: "Guía Javier Martínez",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/tour_tapas.jpg",
  },
  {
    titulo: "Paseo en Góndola por los Canales",
    descripcion:
      "Explora los encantadores canales de la ciudad en un romántico paseo en góndola.",
    ubicacion: "Venecia, Italia",
    precio: "100 EUR",
    duracion: "1 hora",
    categoria: "tour",
    anfitrion: "Gondolero Marco Rossi",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/paseo_gondola.jpg",
  },
  {
    titulo: "Clase de Cocina Francesa",
    descripcion:
      "Aprende a preparar clásicos de la cocina francesa con un chef parisino.",
    ubicacion: "París, Francia",
    precio: "80 EUR",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Chef Pierre Dubois",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/clase_cocina_francesa.jpg",
  },
  {
    titulo: "Tour de Senderismo en la Montaña",
    descripcion:
      "Embárcate en una emocionante aventura de senderismo por las majestuosas montañas de la región.",
    ubicacion: "Innsbruck, Austria",
    precio: "60 EUR",
    duracion: "6 horas",
    categoria: "tour",
    anfitrion: "Guía Alpino Hans Berger",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/tour_senderismo.jpg",
  },
  {
    titulo: "Clase de Sushi Vegano",
    descripcion:
      "Descubre cómo preparar deliciosos sushi sin productos de origen animal en una clase especializada.",
    ubicacion: "Kyoto, Japón",
    precio: "9000 JPY",
    duracion: "2 horas",
    categoria: "clases",
    anfitrion: "Chef Yuki Nakamura",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/clase_sushi_vegano.jpg",
  },
  {
    titulo: "Visita a un Castillo Medieval",
    descripcion:
      "Explora la historia y la arquitectura de un antiguo castillo medieval con un tour guiado.",
    ubicacion: "Edimburgo, Escocia",
    precio: "30 GBP",
    duracion: "2 horas",
    categoria: "tour",
    anfitrion: "Guía Histórico William MacGregor",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/visita_castillo.jpg",
  },
  {
    titulo: "Degustación de Quesos",
    descripcion:
      "Prueba una variedad de quesos artesanales locales en una auténtica quesería.",
    ubicacion: "Ámsterdam, Países Bajos",
    precio: "40 EUR",
    duracion: "1.5 horas",
    categoria: "cata",
    anfitrion: "Quesero Anton van der Berg",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/degustacion_quesos.jpg",
  },
  {
    titulo: "Recorrido en Velero al Atardecer",
    descripcion:
      "Disfruta de las vistas panorámicas del océano al atardecer en un relajante recorrido en velero.",
    ubicacion: "Santorini, Grecia",
    precio: "150 EUR",
    duracion: "2 horas",
    categoria: "tour",
    anfitrion: "Capitán Nikos Papadopoulos",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/velero_atardecer.jpg",
  },
  {
    titulo: "Clase de Cocina Tailandesa",
    descripcion:
      "Aprende a cocinar auténticos platos tailandeses con un chef local en Bangkok.",
    ubicacion: "Bangkok, Tailandia",
    precio: "2000 THB",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Chef Nongkran Daks",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/clase_cocina_tailandesa.jpg",
  },
  {
    titulo: "Tour de Bicicleta por los Campos de Tulipanes",
    descripcion:
      "Recorre los pintorescos campos de tulipanes en un emocionante tour en bicicleta.",
    ubicacion: "Lisse, Países Bajos",
    precio: "50 EUR",
    duracion: "4 horas",
    categoria: "tour",
    anfitrion: "Guía Ciclista Anneke van den Berg",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/tour_tulipanes.jpg",
  },
  {
    titulo: "Noche de Flamenco en Vivo",
    descripcion:
      "Disfruta de una auténtica experiencia de flamenco con una noche de música y baile en directo.",
    ubicacion: "Granada, España",
    precio: "60 EUR",
    duracion: "2 horas",
    categoria: "fiesta",
    anfitrion: "Grupo Flamenco 'Los Reyes'",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/noche_flamenco.jpg",
  },
  {
    titulo: "Excursión en Jeep por el Desierto",
    descripcion:
      "Explora los paisajes impresionantes del desierto en una emocionante excursión en jeep.",
    ubicacion: "Dubái, Emiratos Árabes Unidos",
    precio: "300 AED",
    duracion: "5 horas",
    categoria: "tour",
    anfitrion: "Guía del Desierto Ahmad Al-Mansoori",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/excursion_desierto.jpg",
  },
  {
    titulo: "Clase de Cocina Peruana",
    descripcion:
      "Aprende a preparar platos tradicionales peruanos con un chef experto en Lima.",
    ubicacion: "Lima, Perú",
    precio: "150 PEN",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Chef Ricardo Morales",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/clase_cocina_peruana.jpg",
  },
  {
    titulo: "Recorrido en Tren por los Alpes Suizos",
    descripcion:
      "Embárcate en un pintoresco recorrido en tren a través de los impresionantes Alpes Suizos.",
    ubicacion: "Interlaken, Suiza",
    precio: "100 CHF",
    duracion: "6 horas",
    categoria: "tour",
    anfitrion: "Guía Ferroviario Hans Müller",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/recorrido_tren.jpg",
  },
  {
    titulo: "Cena en Crucero por el Río Sena",
    descripcion:
      "Disfruta de una cena romántica a bordo de un elegante crucero con vistas a los monumentos de París.",
    ubicacion: "París, Francia",
    precio: "150 EUR",
    duracion: "3 horas",
    categoria: "cena",
    anfitrion: "Chef Philippe Martin",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/cena_crucero.jpg",
  },
  {
    titulo: "Visita a una Plantación de Té",
    descripcion:
      "Descubre el proceso de cultivo y producción del té en una auténtica plantación de té.",
    ubicacion: "Kioto, Japón",
    precio: "3000 JPY",
    duracion: "2 horas",
    categoria: "tour",
    anfitrion: "Guía Técnico Hiroshi Yamada",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/visita_plantacion_te.jpg",
  },
  {
    titulo: "Cata de Mezcal Artesanal",
    descripcion:
      "Explora los sabores únicos del mezcal en una cata dirigida por un experto catador.",
    ubicacion: "Oaxaca, México",
    precio: "600 MXN",
    duracion: "2 horas",
    categoria: "cata",
    anfitrion: "Maestro Mezcalero Juan Pérez",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/cata_mezcal.jpg",
  },
  {
    titulo: "Tour en Segway por la Ciudad Antigua",
    descripcion:
      "Descubre los encantos de la ciudad antigua en un divertido recorrido en segway.",
    ubicacion: "Praga, República Checa",
    precio: "40 EUR",
    duracion: "2 horas",
    categoria: "tour",
    anfitrion: "Guía Segway Petr Novák",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/tour_segway.jpg",
  },
  {
    titulo: "Cena Tradicional India",
    descripcion:
      "Prueba una variedad de platos tradicionales indios en una cena auténtica en Nueva Delhi.",
    ubicacion: "Nueva Delhi, India",
    precio: "1500 INR",
    duracion: "2 horas",
    categoria: "cena",
    anfitrion: "Chef Rajesh Sharma",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/cena_india.jpg",
  },
  {
    titulo: "Excursión a la Selva Amazónica",
    descripcion:
      "Sumérgete en la selva amazónica y descubre su increíble biodiversidad en una emocionante excursión.",
    ubicacion: "Manaus, Brasil",
    precio: "300 BRL",
    duracion: "1 día",
    categoria: "tour",
    anfitrion: "Guía de la Selva Ana Silva",
    valoraciones: "4.8",
    imagenes: "https://example.com/images/excursion_selva.jpg",
  },
  {
    titulo: "Recorrido en Helicóptero sobre las Cataratas del Niágara",
    descripcion:
      "Experimenta una vista panorámica única de las majestuosas Cataratas del Niágara desde un helicóptero.",
    ubicacion: "Niágara, Canadá",
    precio: "200 CAD",
    duracion: "1 hora",
    categoria: "tour",
    anfitrion: "Piloto de Helicóptero Emily Johnson",
    valoraciones: "4.9",
    imagenes: "https://example.com/images/recorrido_helicoptero.jpg",
  },
  {
    titulo: "Taller de Cerámica en un Taller Local",
    descripcion:
      "Crea tu propia obra maestra de cerámica en un taller dirigido por un artista local.",
    ubicacion: "Kioto, Japón",
    precio: "5000 JPY",
    duracion: "3 horas",
    categoria: "clases",
    anfitrion: "Artista Ceramista Satoshi Tanaka",
    valoraciones: "4.7",
    imagenes: "https://example.com/images/taller_ceramica.jpg",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allExperiencias = await Experiencia.find();
    if (allExperiencias.length > 0) {
      await Experiencia.collection.drop();
      console.log("Experiencias borradas");
    }
  })
  .catch((error) => console.log("error borrando experiencias", error))
  .then(async () => {
    const experienciaMap = arrayExperiencias.map(
      (experiencia) => new Experiencia(experiencia)
    );
    await Experiencia.insertMany(experienciaMap);
    console.log("Experiencias creadas");
  })
  .catch((error) => console.log("error insertando experiencias", error))
  .finally(() => mongoose.disconnect());
