<script setup>
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
      <img
        v-if="props.product.attributes.handset_cat_promotion_sticker"
        class="tile__img--promotion"
        alt="promotion sticker"
        src="@/assets/smartpakker.svg"
      />
      <img class="tile__img" alt="product image" src="@/assets/product.webp" />
      <div
        v-if="props.product.attributes.promotion_label"
        class="tile__gradient-promotion"
        :class="{
          'tile__gradient-promotion--smart': props.product.attributes.handset_cat_promotion_sticker
        }"
      >
        <p class="tile__promotion-text txt-left">
          {{ props.product.attributes.promotion_label }}
        </p>
      </div>
      <p class="txt-left">{{ props.product.manufacturer }}</p>
      <h2 class="tile__title txt-left">
        {{ props.product.name }}
      </h2>
      <div class="tile__actions txt-right">
        <a class="button button--secondary">Bekijk</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  background-color: var(--color-background);

  .tile__body {
    background-color: var(--color-background-soft);
    border-radius: 12px;
  }
  .tile__img {
    max-height: 240px;
  }
  .tile__img--promotion {
    position: absolute;
    top: 25%;
    z-index: 1;
    left: 5%;
  }
  .tile__gradient-promotion {
    background: #f3f3f3;
    position: absolute;
    top: 45%;
    left: 5%;
    max-width: 200px;
    padding: 8px 16px;
    margin: 0;
    border-radius: 8px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 7%), 0 1px 10px 0 rgb(0 0 0 / 6%),
      0 2px 4px -1px rgb(0 0 0 / 10%);

    .tile__promotion-text {
      word-break: break-word;
      font-weight: 700;
      line-height: 18px;
    }
  }
  .tile__gradient-promotion--smart {
    background: linear-gradient(50deg, #0af 0%, #00c300 37%, #00c300 100%);
  }
}
</style>
