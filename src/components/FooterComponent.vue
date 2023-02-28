<script setup></script>
<template>
  <footer class="footer">
    <div class="footer__body">
      <dl class="footer__list">
        <dt><a class="footer__link">Lorem ipsum</a></dt>
        <dd><a class="footer__link">Dolor sit amet</a></dd>
        <dd><a class="footer__link">Consectetur </a></dd>
        <dd><a class="footer__link">Adipiscing elit</a></dd>
      </dl>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  margin-top: auto;
  .footer__body {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    .footer__list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .footer__link {
        padding: 8px;
      }
    }
  }
}
</style>
