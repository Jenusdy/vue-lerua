<template>
    <button v-on:click="filterData">Filter</button>
</template>
<script>
import { bus } from '../main'
export default {
    name: 'Filter',
    methods: {
        filterData() {
            bus.$emit('filter', "Data Filtered");
        }
    }
}
</script>