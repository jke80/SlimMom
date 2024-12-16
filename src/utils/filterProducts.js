import products from '../data/products.json';

export const filterProducts = bloodGroup => {
  const notAllowedProducts = products.filter(
    product => product.groupBloodNotAllowed[bloodGroup] === true
  );
  const allowedProducts = products.filter(
    product => product.groupBloodNotAllowed[bloodGroup] === false
  );

  const categoriesWithNotAllowedProducts = notAllowedProducts
    .map(product => product.categories[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const categoriesWithAllowedProducts = allowedProducts
    .map(product => product.categories[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const notAllowedCategories = categoriesWithNotAllowedProducts.filter(
    item => !categoriesWithAllowedProducts.includes(item)
  );

  const notAllowedProductsFromAllowedCategories = notAllowedProducts
    .filter(item => categoriesWithAllowedProducts.includes(item.categories[0]))
    .map(item => {
      return [item.title.ua, item.categories[0]];
    });

  return { notAllowedCategories, notAllowedProductsFromAllowedCategories };
};
