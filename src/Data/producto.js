const films = [
  {
    id: 1,
    price: 50000,
    image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    price: 70000,
    image: "https://i.postimg.cc/J0WYrhDR/images.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    price: 80000,
    image: "https://i.postimg.cc/4N7BhVGB/Cacerola-28-Cherry.png",
    title: "cacerola 28cm",
  },
];
export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(films);
  }, 3000);
});
export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve[1];
    }, 2000);
  });
};
