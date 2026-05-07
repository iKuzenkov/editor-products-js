import { entryData } from "./entry-data";

/**
 * getting values ​​into arrays
 * @param {Object} salads
 * @param {Object} sides
 * @param {Object} coffee
 */
const generalData = (salads, sides, coffee) => {
  const data = {
    section: {
      name: [salads.name, sides.name, coffee.name],
      description: [salads.description, sides.description, coffee.description],
    },
    product: {
      image: [
        salads.products.taco.image,
        salads.products.caesar.image,
        salads.products.cobb.image,
        sides.products.fries.image,
        sides.products.baconator.image,
        coffee.products.vanilla.image,
        coffee.products.pineapple.image,
      ],
      name: [
        salads.products.taco.name,
        salads.products.caesar.name,
        salads.products.cobb.name,
        sides.products.fries.name,
        sides.products.baconator.name,
        coffee.products.vanilla.name,
        coffee.products.pineapple.name,
      ],
      description: [
        salads.products.taco.description,
        salads.products.caesar.description,
        salads.products.cobb.description,
        sides.products.fries.description,
        sides.products.baconator.description,
        coffee.products.vanilla.description,
        coffee.products.pineapple.description,
      ],
      price: [
        salads.products.taco.price,
        salads.products.caesar.price,
        salads.products.cobb.price,
        sides.products.fries.price,
        sides.products.baconator.price,
        coffee.products.vanilla.price,
        coffee.products.pineapple.price,
      ],
    },
  };
  entryData(data);
};

/**
 * data destructuring
 * @param {Object} data
 */
export const destructuringData = (data) => {
  const { salads, sides, coffee } = data;
  generalData(salads, sides, coffee);
};
