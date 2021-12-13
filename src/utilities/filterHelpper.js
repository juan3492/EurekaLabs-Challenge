function filterProducts(products, types, minPrice, maxPrice) {
  let filteredProducts = products;
  if (types.length) {
    filteredProducts = filteredProducts.filter((product) => {
      return types.indexOf(product.type) !== -1;
    });
  }
  if (maxPrice !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
  }
  return filteredProducts;
}

export { filterProducts };
