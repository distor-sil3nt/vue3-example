<script setup lang="ts">
  import { NH1 } from "naive-ui";
  import { useStore } from "../store/store";

  const store = useStore();
</script>

<template>
  <n-h1 class="title">{{ store.headline }}</n-h1>
</template>

<style scoped lang="sass">
  a
    color: #42b983

  label
    margin: 0 0.5em
    font-weight: bold

  code
    background-color: #eee
    padding: 2px 4px
    border-radius: 4px
    color: #304455
</style>
