<template>
  <div class="sort-panel__container">
    <div>Avilable Deals: {{ $store.getters.availableDeals }}</div>
    <div class="sort-panel__right">
      <div class="sort-panel__icons">
        <div
          class="sort-panel__icons--left"
          v-bind:class="{
            'sort-panel__icons--active': !$store.getters.isListView,
          }"
          v-on:click="changeView(GRID_VIEW)"
        >
          <b-icon-grid-fill />
        </div>
        <div
          v-bind:class="{
            'sort-panel__icons--active': $store.getters.isListView,
          }"
          v-on:click="changeView(LIST_VIEW)"
        >
          <b-icon-list-ul />
        </div>
      </div>
      <div class="sort-panel__select">
        <div class="sort-panel__select-label">sort result</div>
        <b-form-select
          @change="changeSortType"
          :options="options"
        ></b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GRID_VIEW,
  LIST_VIEW,
  ALPHABET_SORT,
  HIGH_PRICE_SORT,
  LOW_PRICE_SORT,
} from "../store/constants";

export default {
  data() {
    return {
      options: [
        { value: ALPHABET_SORT, text: "A-Z" },
        { value: HIGH_PRICE_SORT, text: "High to Low Price" },
        { value: LOW_PRICE_SORT, text: "Low to High Price" },
      ],
      GRID_VIEW,
      LIST_VIEW,
    };
  },
  methods: {
    changeView(view) {
      this.$store.dispatch("CHANGE_VIEW", view);
    },
    changeSortType(sort) {
      this.$store.dispatch("CHANGE_SORTING", sort);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/bootstrap-vue/src/index.scss";
.sort-panel {
  &__container {
    width: 100%;
    padding: 10px 30px;
    background: #f9fafc;
    color: hsl(208, 11%, 55%);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icons {
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--left {
      margin-right: 10px;
    }

    &--active {
      color: #10b981;
    }
  }

  &__select {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-label {
      width: 120px;
    }
  }
}
</style>
