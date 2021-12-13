<template>
  <div class="mums-deals__spinner">
    <div>
      <span>
        <b-spinner
          type="grow"
          Label="loading..."
          style="width: 7rem; height: 7rem"
        ></b-spinner>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mums-deals__spinner {
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
