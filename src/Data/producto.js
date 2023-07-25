const films = [
  {
    id: 1,
    category: "",
    image: "./public/img/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    category: "",
    image: "./public/img/imagenes.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    category: "",
    image: "./public/img/Cacerola_28_Cherry.png",
    title: "cacerola 28cm",
  },
];
export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(films);
  }, 3000);
});
