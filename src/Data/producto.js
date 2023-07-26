const films = [
  {
    id: 1,
    price: 50000,
    image: "../img/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    price: 70000,
    image: "../img/imagenes.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    price: 80000,
    image: "../img/Cacerola_28_Cherry.png",
    title: "cacerola 28cm",
  },
];
export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(films);
  }, 3000);
});
