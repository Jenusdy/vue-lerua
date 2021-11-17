<template>
  <div>
    <h1 v-on:click="changeHeader">{{ header }}</h1>
  </div>
</template>
<script>
import { bus } from "../main";
export default {
  name: "Sender",
  props: {
    msg: String,
    header: String,
  },
  methods: {
    changeHeader() {
      this.header = "header clicked";
      bus.$emit("channel01", "change header");
    },
  },
};
</script>