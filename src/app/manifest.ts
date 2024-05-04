import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Endy Gómez",
    short_name: "Endy",
    description:
      "Endy Gómez es un Desarrollador de Software experto en DevOps. Él es un apasionado de la tecnología y le gusta compartir conocimiento con otras personas.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
