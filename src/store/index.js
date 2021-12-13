// @vendors
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// @constants
import {
  API_URL,
  SECRET_KEY,
  LIST_VIEW,
  GRID_VIEW,
  ALPHABET_SORT,
} from "./constants";

import { sortProducts } from "../utilities/sortHelpper";
import { filterProducts } from "../utilities/filterHelpper";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsFetching: false,
    productsSuccess: false,
    productsError: false,
    products: [],
    productsTypes: [],
    viewType: GRID_VIEW,
    sortType: ALPHABET_SORT,
    filterByType: [],
    filterPriceMin: 0,
    filterPriceMax: null,
    filteredProducts: [],
  },

  mutations: {
    FETCH_PRODUCT_REQUEST: (state) => {
      state.productsFetching = true;
      state.productsSuccess = false;
      state.productsError = false;
    },

    FETCH_PRODUCT_SUCCESS: (state, products) => {
      const productTypes = [];
      products.forEach((product) => {
        if (productTypes.indexOf(product.product_type) === -1) {
          productTypes.push(product.product_type);
        }
      });

      const allProducts = [];
      products.forEach((product) => {
        product.variants.forEach((variant) => {
          allProducts.push({
            title: `${product.title} - ${variant.title}`,
            type: product.product_type,
            img: product.image.src,
            price: variant.price,
            quantitySold: product.quantitySold,
          });
        });
      });

      const filteredProducts = sortProducts([...allProducts], state.sortType);

      state.productsFetching = false;
      state.productsSuccess = true;
      state.productsError = false;
      state.products = allProducts;
      state.productsTypes = productTypes;
      state.filteredProducts = filteredProducts;
    },

    FETCH_PRODUCT_ERROR: (state) => {
      state.productsFetching = false;
      state.productsSuccess = false;
      state.productsError = true;
    },

    CHANGE_VIEW: (state, view) => {
      state.viewType = view;
    },

    CHANGE_SORTING: (state, sort) => {
      const sortedProducts = sortProducts(
        filterProducts(
          [...state.products],
          state.filterByType,
          state.filterPriceMin,
          state.filterPriceMax
        ),
        sort
      );
      state.sortType = sort;
      state.filteredProducts = sortedProducts;
    },

    UPDATE_TYPE_FILTER: (state, newTypeFilter) => {
      const filteredProducts = sortProducts(
        filterProducts(
          [...state.products],
          newTypeFilter,
          state.filterPriceMin,
          state.filterPriceMax
        ),
        state.sortType
      );
      state.filterByType = newTypeFilter;
      state.filteredProducts = filteredProducts;
    },

    UPDATE_PRICE_FILTER: (state, newPriceFilter) => {
      const filteredProducts = sortProducts(
        filterProducts(
          [...state.products],
          state.filterByType,
          newPriceFilter[0],
          newPriceFilter[1]
        ),
        state.sortType
      );
      state.filterPriceMin = newPriceFilter[0];
      state.filterPriceMax = newPriceFilter[1];
      state.filteredProducts = filteredProducts;
    },
  },
  actions: {
    GET_PRODUCTS: (state) => {
      state.commit("FETCH_PRODUCT_REQUEST");
      axios
        .get(API_URL, {
          headers: {
            secretKey: SECRET_KEY,
          },
        })
        .then((response) => {
          state.commit("FETCH_PRODUCT_SUCCESS", response.data);
        })
        .catch(() => {
          state.commit("FETCH_PRODUCT_ERROR");
        });
    },
    CHANGE_VIEW: (state, view) => {
      state.commit("CHANGE_VIEW", view);
    },
    CHANGE_SORTING: (state, sort) => {
      state.commit("CHANGE_SORTING", sort);
    },
    UPDATE_TYPE_FILTER: (state, newTypeFilter) => {
      state.commit("UPDATE_TYPE_FILTER", newTypeFilter);
    },
    UPDATE_PRICE_FILTER: (state, newPriceFilter) => {
      state.commit("UPDATE_PRICE_FILTER", newPriceFilter);
    },
  },

  getters: {
    products: (state) => state.products,

    isFetching: (state) => state.productsFetching,

    fetchingSuccess: (state) => state.productsSuccess,

    fetchingError: (state) => state.productsError,

    productsTypes: (state) => state.productsTypes,

    checkboxTypeOptions: (state) => {
      return state.productsTypes.map((type) => {
        return {
          type: type,
          name: `  ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        };
      });
    },

    maxPrice: (state) =>
      Math.max(
        ...state.products.map((product) => Math.ceil(parseFloat(product.price)))
      ),

    availableDeals: (state) => state.products.length,

    isListView: (state) => state.viewType === LIST_VIEW,

    filteredProducts: (state) => state.filteredProducts,
  },
});
