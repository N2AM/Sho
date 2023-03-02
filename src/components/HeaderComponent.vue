<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <nav class="mega-menu top-bar">
        <RouterLink to="/" class="mega-menu__logo">
          <img alt="Logo image" class="logo" src="@/assets/kpn-logo.svg" />
        </RouterLink>

        <ul class="mega-menu__menu">
          <li class="mega-menu__item">
            <RouterLink class="mega-menu__link" to="/">Home</RouterLink>
          </li>
          <li class="mega-menu__item">
            <RouterLink class="mega-menu__link" to="/about">About</RouterLink>
          </li>
        </ul>
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
<style lang="scss" scoped>
.header {
  padding-right: 0px;
  margin-bottom: 1rem;

  .logo {
    display: block;
    margin: 0 auto 0.5rem;
  }

  nav {
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    text-align: center;
    margin-top: 0.5rem;
    place-content: center;
    place-items: center;

    .top-bar__menu {
      padding: 16px;
      .top-bar__link {
        font-size: 16px;
      }
    }

    a.router-link-exact-active {
      color: var(--color-text);
    }

    a.router-link-exact-active:hover {
      background-color: transparent;
    }

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
    }

    a:hover {
      color: #000 !important;
    }

    a:first-of-type {
      border: 0;
    }
  }
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
