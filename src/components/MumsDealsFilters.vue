<template>
  <div class="filters__container">
    <div class="filters__title">Filter Results</div>
    <div class="filters__product-type-section">
      <div class="filters__subtitle">Product Type</div>
      <b-form-group>
        <b-form-checkbox-group
          @change="selectTypes"
          :options="$store.getters.checkboxTypeOptions"
          value-field="type"
          text-field="name"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
    </div>
    <div class="filters__product-price-section">
      <div class="filters__subtitle">Price Range</div>
      <div class="filters__slider-container">
        <Slider
          :min="0"
          :max="$store.getters.maxPrice"
          v-model="value"
          @change="selectRange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";

export default {
  data() {
    return {
      value: [0, this.$store.getters.maxPrice],
    };
  },

  components: {
    Slider,
  },

  methods: {
    selectTypes(options) {
      this.$store.dispatch("UPDATE_TYPE_FILTER", options);
    },
    selectRange(range) {
      this.$store.dispatch("UPDATE_PRICE_FILTER", range);
    },
  },
};
</script>

<style lang="scss">
@import "~@vueform/slider/themes/default.css";

.filters {
  &__container {
    background: #f9fafc;
    border-radius: 10px;
    padding: 30px 20px;
    color: hsl(208, 11%, 55%);
  }

  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: hsl(192, 100%, 9%);
  }

  &__subtitle {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
    color: hsl(192, 100%, 9%);
  }

  &__slider-container {
    margin-top: 40px;
  }

  &__product-type-section {
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e5ef;
  }

  &__product-price-section {
    margin-top: 20px;
  }
}
</style>
