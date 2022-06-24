<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world-component msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="slots">
    <Slots />
  </div>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorldComponent from "./components/HelloWorld.vue";
  import Slots from "./components/Slots.vue";
</script>

<style lang="sass">
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
    &:deep(.title)
      color: #333333

  .slots
    border: 1px solid #fafafa
    width: 500px
    margin: 50px auto
</style>
