<template>
  <div>{{ filterData }}</div>
</template>
<script>
import { bus } from "../main";
export default {
  name: "Table",
  data: () => ({
    filterData: null,
  }),
  created: () => {
    bus.on("filter", (data) => {
        this.filterData = data;
    });
  },
};
</script>