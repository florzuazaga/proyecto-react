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
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("Fallo,vuelva a intentar");
      } else {
        resolve(films);
      }
    }, 2000);
  });
};
export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        list,
        find((item) => item.id === id)
      );
    }, 2000);
  });
};
