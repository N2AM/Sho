<script setup>
import { useProductsStore } from '../stores/products'
import Product from './ProductComponent.vue'
import Spinner from './SpinnerComponent.vue'

const store = useProductsStore()

const getProducts = () => store.getProducts()

getProducts()
</script>
<template>
  <div class="tile">
    <div class="tile__body">
      <h1 class="tile__title">
        <span class="txt-light">Kies uit</span>
        {{ store.products.length }}
        telephoons
      </h1>
    </div>
  </div>
  <div v-if="!store.products" class="loader">
    <Spinner />
  </div>
  <div class="tile row" v-if="store.products">
    <Product
      v-for="product of store.products"
      class="col col--m-4"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss" scoped>
.tile {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 1rem;
  background-color: var(--color-background);
  border-radius: 0;
  box-shadow: none;

  .tile__body {
    margin: auto;
    max-width: 1200px;
    padding: 0;

    .tile__title {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 44px;
      color: var(--color-heading);
      padding: 12px;
      span {
        font-weight: lighter;
        margin-right: 12px;
      }
    }
  }
}
.loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  overflow: hidden;
  background: #fff;
}
</style>
