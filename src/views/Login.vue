<template>
  <v-card fluid max-width="400" class="mx-auto my-12">
    <v-card-title class="d-flex align-center justify-center">
      <h1>Login</h1>
    </v-card-title>

    <v-card-text>
      <v-form @submit.prevent="logingan">
        <v-text-field v-model="userData.email" label="Email" outlined>
        </v-text-field>

        <v-text-field
          v-model="userData.password"
          label="Password"
          :type="'password'"
          outlined
        >
        </v-text-field>

        <v-btn block color="primary" type="submit"> Login </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { loginPost } from "../services/login";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async logingan() {
      (async () => {
        let checkLogin = null;

        try {
          checkLogin = await loginPost(this.userData);
          localStorage.setItem("id_user", checkLogin.data.user_id);
          localStorage.setItem("name", checkLogin.data.name);
          localStorage.setItem(
            "position",
            checkLogin.data.position.position_name
          );
          alert("Berhasil Login");
          this.$router.push("/home");
        } catch (err) {
          alert("Email dan Password salah");
        } finally {
          //
        }
      })();
    },
  },
};
</script>