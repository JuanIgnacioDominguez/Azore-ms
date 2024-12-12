/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Incluye el archivo raíz de Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos fuente de React
  ],
  theme: {
    extend: {
      colors: {
        // Agrega colores personalizados si es necesario
        customPrimary: "#FF6828",
        customSecondary: "#E57028",
      },
    },
  },
  plugins: [require('daisyui')], // Agregar DaisyUI como plugin
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6828",
          secondary: "#E57028",
          accent: "#3A3D46",
          neutral: "#1D1F23",
          "base-100": "#0A0B0D",
          info: "#3A4E57",
          success: "#2F6A32",
          warning: "#B3741F",
          error: "#C13838",
        },
      },
      "dark", // Tema adicional predefinido de DaisyUI
      "light", // Tema adicional predefinido de DaisyUI
    ],
    base: true, // Habilita estilos base de DaisyUI
    utils: true, // Habilita utilidades de DaisyUI
    logs: false, // Desactiva logs en la consola
    rtl: false, // Configuración para idiomas RTL
    prefix: "", // Prefijo opcional para clases DaisyUI
  },
};
