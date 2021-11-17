<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }  
}
</script>