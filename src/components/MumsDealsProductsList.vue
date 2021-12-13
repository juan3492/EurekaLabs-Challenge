<template>
  <div class="product-list__container">
    <div
      class="product-list__card-area"
      v-for="(product, index) in $store.getters.filteredProducts"
      :key="index"
    >
      <b-card
        :img-src="product.img"
        img-alt="Image"
        :img-height="300"
        :img-width="300"
        img-left
      >
        <div class="product-list__card-title">{{ product.title }}</div>
        <div class="product-list__card-details">
          <div>
            <div class="product-list__card-detail">
              Type: {{ product.type }}
            </div>
            <div class="product-list__card-detail">
              Quantity sold: {{ product.quantitySold }}
            </div>
          </div>
          <div class="product-list__card-price">${{ product.price }}</div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-list {
  &__container {
    background: #f9fafc;
    border-radius: 10px;
    padding: 30px 20px;
    margin-top: 20px;
    color: hsl(208, 11%, 55%);
  }

  &__card {
    &-area {
      margin-bottom: 20px;
    }

    &-title {
      font-size: 17px;
      margin-bottom: 5px;
      color: hsl(192, 100%, 9%);
    }

    &-details {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    &-price {
      display: flex;
      align-self: flex-end;
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 5px;
      color: hsl(192, 100%, 9%);
      text-align: center;
      margin: 20px;
    }
  }
}
</style>
