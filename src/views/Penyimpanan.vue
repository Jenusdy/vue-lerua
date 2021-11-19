<template>
  <div class="penyimpanan">
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Nama Depan Local"
            v-model="userData.nama_depan"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Nama Belakang Local"
            v-model="userData.nama_belakang"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Nama Depan Session"
            v-model="userSession.nama_depan"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Nama Belakang Session"
            v-model="userSession.nama_belakang"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Penyimpanan",
  data: () => ({
    userData: {
      nama_depan: null,
      nama_belakang: null,
    },
    userSession: {
      nama_depan: null,
      nama_belakang: null,
    },
  }),
  watch: {
    "userData.nama_depan": function (val) {
      this.userData.nama_depan = val;
      this.setData("user", JSON.stringify(this.userData));
    },
    "userData.nama_belakang": function (val) {
      this.userData.nama_belakang = val;
      this.setData("user", JSON.stringify(this.userData));
    },
    "userSession.nama_depan": function (val) {
      this.userSession.nama_depan = val;
      this.setSessionData("userSession", JSON.stringify(this.userSession));
    },
    "userSession.nama_belakang": function (val) {
      this.userSession.nama_belakang = val;
      this.setSessionData("userSession", JSON.stringify(this.userSession));
    },
  },
  mounted() {
    this.getData("user");
    this.getSessionData("userSession");
  },
  methods: {
    setData(key, value) {
      localStorage.setItem(key, value);
    },
    getData(key) {
      if (localStorage.getItem(key)) {
        try {
          this.userData = JSON.parse(localStorage.getItem(key));
        } catch (error) {
          localStorage.removeItem(key);
        }
      }
    },
    setSessionData(key, value) {
      sessionStorage.setItem(key, value);
    },
    getSessionData(key) {
      if (sessionStorage.getItem(key)) {
        try {
          this.userSession = JSON.parse(sessionStorage.getItem(key));
        } catch (error) {
          sessionStorage.removeItem(key);
        }
      }
    },
  },
};
</script>