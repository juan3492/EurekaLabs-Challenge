import {
  ALPHABET_SORT,
  HIGH_PRICE_SORT,
  LOW_PRICE_SORT,
} from "../store/constants";

function sortByAlphabet(productArray) {
  return productArray.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  });
}

function sortByMaxPrice(productArray) {
  return productArray.sort(function (a, b) {
    return b.price - a.price;
  });
}

function sortByMinPrice(productArray) {
  return productArray.sort(function (a, b) {
    return a.price - b.price;
  });
}

function sortProducts(productArray, sortingType) {
  let sortArray = productArray;
  switch (sortingType) {
    case HIGH_PRICE_SORT:
      sortArray = sortByMaxPrice(productArray);
      break;
    case LOW_PRICE_SORT:
      sortArray = sortByMinPrice(productArray);
      break;
    case ALPHABET_SORT:
    default:
      sortArray = sortByAlphabet(productArray);
      break;
  }
  return sortArray;
}

export { sortByAlphabet, sortByMaxPrice, sortByMinPrice, sortProducts };
