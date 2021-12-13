<template>
  <div>
    <div class="mums-deals__title">Welcome to the Mum's Deals Page</div>
    <div class="mums-deals__content">
      <b-row>
        <b-col cols="3">
          <MumsDealsFilter />
        </b-col>
        <b-col cols="9">
          <MumsDealsSortPanel />
          <div v-if="this.$store.getters.isListView">
            <MumsDealsProductsList />
          </div>
          <div v-else>
            <MumsDealsProductsGrid />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import MumsDealsFilter from "../components/MumsDealsFilters.vue";
import MumsDealsSortPanel from "../components/MumsDealsSortPanel.vue";
import MumsDealsProductsGrid from "../components/MumsDealsProductsGrid.vue";
import MumsDealsProductsList from "../components/MumsDealsProductsList.vue";

export default {
  components: {
    MumsDealsFilter,
    MumsDealsSortPanel,
    MumsDealsProductsGrid,
    MumsDealsProductsList,
  },
};
</script>

<style lang="scss" scoped>
.mums-deals {
  &__title {
    background: #f5f6f8;
    padding: 30px 60px;
    margin-bottom: 20px;
    font-size: 25px;
    color: hsl(192, 100%, 9%);
  }

  &__content {
    padding: 0 30px;
  }
}
</style>
