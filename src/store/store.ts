import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    headline: "Vue 3 Test",
  }),
});
