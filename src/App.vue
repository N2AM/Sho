<script setup>
import Header from './components/HeaderComponent.vue'
import Notification from './components/NotificationComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <Header />
  <Notification />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
