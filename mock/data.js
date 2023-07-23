export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("Fallo,vuelva a intentar");
      } else {
        resolve(list);
      }
    }, 2000);
  });
};
export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list);
    }, 2000);
  });
};
