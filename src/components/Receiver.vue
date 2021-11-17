<template>
  <div>
    {{ header }}
  </div>
</template>
<script>
import { bus } from "../main";
export default {
  name: "Receiver",
  props: {
    msg: String,
    header: String,
  },
  created() {
    bus.$on("channel01", (data) => {
      this.header = data;
    });
  },
  data: () => ({
    
  }),
};
</script>