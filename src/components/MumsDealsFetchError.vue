<template>
  <div class="error-view">
    <div>
      <b-jumbotron header="Error fetching data! :(">
        <p>Please, touch the following button or reload the page.</p>
        <b-button variant="danger" v-on:click="handleButton()">Reload</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleButton() {
      this.$store.dispatch("GET_PRODUCTS");
    },
  },
};
</script>

<style lang="scss" scoped>
.error-view {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
