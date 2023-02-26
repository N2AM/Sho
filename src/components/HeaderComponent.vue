<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="@/assets/kpn-logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="top-bar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
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
          <li class="top-bar__item">
            <a class="top-bar__link"><i class="ui-help"></i></a>
          </li>
          <li class="top-bar__item">
            <a class="top-bar__link"><i class="ui-chat"></i></a>
          </li>
          <li class="top-bar__item">
            <a class="top-bar__link top-bar__link--active"><i class="ui-search"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  line-height: 1.5;
  max-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  display: flex;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  color: #000 !important;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    width: 100%;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
