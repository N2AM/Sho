<script setup>
import { useProductsStore } from '../stores/products'
import Product from './ProductComponent.vue'

const store = useProductsStore()
const getProducts = () => store.getProducts()

getProducts()
</script>
<template>
  <div class="tile">
    <div class="tile__body">
      <h2 class="tile__title">
        <i class="tile__icon ui-mobile"></i>Kies uit {{ store.products.length }} telefoons
      </h2>
    </div>
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
    }
  }
}
</style>
