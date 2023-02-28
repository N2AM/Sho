<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/kpn-logo.svg" width="125" height="125" />

      <nav class="top-bar">
        <div class="top-bar__links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
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
  background-color: var(--color-background-soft);
  line-height: 1.5;
  max-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  padding-bottom: 8px;
  max-width: 1200px;
  margin-bottom: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
  place-content: center;
  place-items: center;
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
@media (max-width: 768px) {
  header {
    flex-wrap: wrap;
  }
}
@media (min-width: 1024px) {
  header {
    width: 100%;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin: auto;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    width: 100%;
    display: flex;
    max-width: 1200px;
    margin: auto;
    align-items: center;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
