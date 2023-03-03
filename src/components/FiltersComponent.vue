<script setup>
import { useProductsStore } from '../stores/products'
import { buildfilters } from '../composables/filters'

const store = useProductsStore()
</script>
<template>
  <div class="filters top-bar h-auto">
    <ul class="top-bar__menu flex place-content-between flex-wrap w-100">
      <div class="flex flex-wrap">
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--collapsed top-bar__link--expanded"> Merk </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
            Kleur
          </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed"> 5G </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
            Besturingssystem
          </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
            E-sim
          </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
            refurbished
          </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="checkbox" id="Apple" value="Apple" v-model="checkedValue" />
              <label class="ml-1" for="Apple">Apple</label>
            </li>
            <li class="flex">
              <input type="checkbox" id="Samsung" value="Samsung" v-model="checkedValue" />
              <label class="ml-1" for="Samsung">Samsung</label>
            </li>
          </ul>
        </li>
      </div>
      <div class="flex place-items-center">
        <p class="bold">Sorteren op:</p>
        <li class="top-bar__item">
          <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
            Meest verkocht
          </span>
          <ul class="top-bar__action-menu">
            <li class="flex">
              <input type="radio" id="meestverkocht" v-model="sorteren" value="meestverkocht" />
              <label class="ml-1" for="meestverkocht">Meest verkocht</label>
            </li>
            <li class="flex">
              <input type="radio" id="new" v-model="sorteren" value="new" />
              <label class="ml-1" for="new">New</label>
            </li>
            <li class="flex">
              <input type="radio" id="actie" v-model="sorteren" value="actie" />
              <label class="ml-1" for="actie">Actie</label>
            </li>
          </ul>
        </li>
      </div>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.filters {
  max-width: 1200px;
  margin: auto;
  padding-left: 12px;
  padding-right: 12px;
}
.top-bar__action-menu {
  display: none;
}
.top-bar__item:hover {
  .top-bar__action-menu {
    display: block;
  }

  .top-bar__link.top-bar__link--expanded::after {
    content: '\e920' !important;
  }
}
</style>
