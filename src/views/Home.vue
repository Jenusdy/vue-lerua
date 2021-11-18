<template>
  <div class="home">
    <v-container fluid>
      <h1>This is an home page.</h1>
      <v-btn
        v-for="item in languages"
        :key="item.title"
        @click="changeLocale(item.language)"
      >
        <flag :iso="item.flag" /> {{ item.title }}
      </v-btn>
      <br />
      <p>{{ $t("msg", { name : 'Anjayani'}) }}</p>
      <br>
      <p>{{ $d(new Date(),'digit') }}</p>
      <br>
      <p>Uang saya saat ini {{ $n(12,'currency') }} </p>
    </v-container>
  </div>
</template>

<script>
import i18n from '../plugins/i18n'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      languages: [
        {
          flag: "id",
          language: "id",
          title: "Indonesia",
        },
        {
          flag: "us",
          language: "en",
          title: "English",
        },
        {
          flag: "es",
          language: "es",
          title: "Espanyola",
        },
        {
          flag: "in",
          language: "in",
          title: "India",
        },
        {
          flag: "zw",
          language: "zw",
          title: "Oka",
        },
      ],
    };
  },
  methods : {
    changeLocale(locate){
      i18n.locale = locate
    }
  }
};
</script>
