<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>Approval System</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item to="home">
            <v-list-item-icon>
              <v-icon>mdi-audio-input-xlr</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="disposisi-create">
            <v-list-item-icon>
              <v-icon>mdi-file-sign</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Disposisi Create</v-list-item-title>
          </v-list-item>
          <v-list-item to="disposisi">
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Disposisi</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>