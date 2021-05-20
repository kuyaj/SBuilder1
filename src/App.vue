<template>
  <navigator></navigator>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navigator from "@/components/Navigator.vue";

@Options({
  components: {
    Navigator,
  },
})
export default class App extends Vue {}
</script>


<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ecf0f1;
}
</style>
