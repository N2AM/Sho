<script setup>
import { useProductsStore } from '../stores/products'
import { buildfilters } from '../composables/filters'

const store = useProductsStore()
</script>
<template>
  <div class="filters top-bar">
    <ul class="top-bar__menu">
      <li class="top-bar__item hidden-xs hidden-s">
        <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
          <i class="ui-account"></i>
          MijnKPN
        </span>
        <ul class="top-bar__action-menu top-bar__action-menu--visible">
          <li><a class="top-bar__link">Profile</a></li>
          <li><a class="top-bar__link">Sign out</a></li>
        </ul>
      </li>
      <li class="top-bar__item hidden-xs hidden-s">
        <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
          <i class="ui-account"></i>
          MijnKPN
        </span>
        <ul class="top-bar__action-menu top-bar__action-menu--visible">
          <li><a class="top-bar__link">Profile</a></li>
          <li><a class="top-bar__link">Sign out</a></li>
        </ul>
      </li>
      <li class="top-bar__item hidden-xs hidden-s">
        <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
          <i class="ui-account"></i>
          MijnKPN
        </span>
        <ul class="top-bar__action-menu top-bar__action-menu--visible">
          <li><a class="top-bar__link">Profile</a></li>
          <li><a class="top-bar__link">Sign out</a></li>
        </ul>
      </li>
      <li class="top-bar__item hidden-xs hidden-s">
        <span class="top-bar__link top-bar__link--expanded top-bar__link--collapsed">
          <i class="ui-account"></i>
          MijnKPN
        </span>
        <ul class="top-bar__action-menu top-bar__action-menu--visible">
          <li><a class="top-bar__link">Profile</a></li>
          <li><a class="top-bar__link">Sign out</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
