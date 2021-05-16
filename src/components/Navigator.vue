<template>
  <div class="navigator">
    <div class="item">
      <router-link to="/">홈뱆에</router-link>
    </div>
    <div class="item">
      <router-link to="/createcharacter">Create</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Navigator extends Vue {
    
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.item {
  border: transparent;
  border-radius: 10em;
  margin: 1px 5px;
  padding: 6px 15px;
  display: inline;
  cursor: pointer;
  font-size: 14px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.navigator {
  background-color: transparent;
  border: transparent;
  padding: 20px 3px;
  text-align: center;
}
</style>