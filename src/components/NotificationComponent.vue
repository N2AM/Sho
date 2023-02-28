<script setup></script>

<template>
  <div class="notification notification--success">
    <i class="ui-present"></i>
    <div class="notification__header">
      Nu Unlimited Data scherp geprijsd! Bij elke telefoon of
      <a class="a">Sim Only</a>.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notification {
  display: flex;
  place-items: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 4px solid #005500;
  border-radius: 12px;
  background-color: #c2e1c2;
  margin-bottom: 1rem;

  .notification__header {
    border-radius: 12px;
    padding: 1rem;
  }
}
.notification::before {
  z-index: 1;
  display: none;
}
</style>
