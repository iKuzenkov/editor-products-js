export const saveDataToAsideLS = (section) => {
  let data = JSON.parse(localStorage.getItem("data_aside" || "[]"));
  data = data.map((el, i) => {
    return {
      ...el,
      name: section.name[i],
    };
  });
  localStorage.setItem("data_aside", JSON.stringify(data));
};

export const saveDataToMainLS = (section) => {
  let data = JSON.parse(localStorage.getItem("data_main" || "[]"));
  data = data.map((el, i) => {
    return {
      ...el,
      name: section.name[i],
      description: section.description[i],
    };
  });
  localStorage.setItem("data_main", JSON.stringify(data));
};

export const saveDataToProductLS = (product) => {
  let data = JSON.parse(localStorage.getItem("data_product" || "[]"));
  data = data.map((el, i) => {
    return {
      ...el,
      image: product.image[i],
      name: product.name[i],
      description: product.description[i],
      price: product.price[i],
    };
  });
  localStorage.setItem("data_product", JSON.stringify(data));
};
