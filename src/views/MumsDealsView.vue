<template>
  <div>
    <div v-if="this.$store.getters.isFetching">
      <MumsDealsSpinner />
    </div>
    <div v-else-if="this.$store.getters.fetchingError">
      <MumsDealsFetchError />
    </div>
    <div v-else>
      <MumsDeals />
    </div>
  </div>
</template>

<script>
import MumsDeals from "../components/MumsDeals.vue";
import MumsDealsSpinner from "../components/MumsDealsSpinner.vue";
import MumsDealsFetchError from "../components/MumsDealsFetchError.vue";
export default {
  components: {
    MumsDeals,
    MumsDealsSpinner,
    MumsDealsFetchError,
  },
  created() {
    this.$store.dispatch("GET_PRODUCTS");
  },
};
</script>

<style lang="scss"></style>
