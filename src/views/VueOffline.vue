<template>
  <div class="vueOffline">
    <v-container fluid fill-height>
        <v-row>
            <p v-if="isOnline">This part will be visible only if user is online {{ isOnline }}</p>
            <p v-if="isOffline">This part will be visible only if user is offline {{ isOnline }}</p>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import {VueOfflineMixin} from 'vue-offline';

export default {
    name : "VueOffline",
    mixins : [VueOfflineMixin],
    mounted () {
        this.$on('offline', () => {
            alert("You are offline! This website will not work")
        })
        this.$on('online', () => {
            alert("You are online! This website will not work")
        })
    }
}
</script>