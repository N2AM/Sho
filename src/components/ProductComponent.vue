<script setup>
console.log(props)
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="tile tile--stretch">
    <div class="tile__body">
      <img class="tile__img" alt="product" src="@/assets/product.webp" />
      <h2 class="tile__title">
        {{ props.product.name }}
      </h2>
      <p class="p"><strong>Sit</strong> amet</p>
      <a class="button button--secondary">Bekijk</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  background-color: var(--color-background);
}
.tile__body {
  background-color: var(--color-background-soft);
  border-radius: 12px;
}
.tile__img {
  max-height: 240px;
}
</style>
