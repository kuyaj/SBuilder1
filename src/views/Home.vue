

<template>
  <div class="home">
    <h2>홈뱆에는 있읍니다</h2>
    <div class="card-group">
      <div class="card" v-for="(item, key) in characters" :key="key">
        <div class="card-photo">
          <img :src="item.photo" />
        </div>
        <div class="card-name">{{ item.name }}</div>
        <div class="card-button">
          <button class="delete">지우다</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import { database } from '../firebaseConfig';

import { Options, Vue } from 'vue-class-component';
export default class Home extends Vue {

characters!:any; 


created(){
 
     database.ref("characters").on("value", (snapshot) => {
      let character = Object.entries(snapshot.val()).map((item) => {
        var [keys, values] = item;
        var { name, link } = values;
        return {
          name: name,
          photo: link,
        };
      });
      this.characters = character;
}
</script>

<style>
h2 {
  text-align: center;
}
.card-group {
  border: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

.card-group > .card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #ffffff;
  border: transparent;
  margin: 10px;
}

.card {
  width: auto;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card > .card-header {
  border: transparent;
  padding: 5px;
}

.card > .card-photo {
  border: transparent;
  border-radius: 3px;
}

.card > .card-name {
  border: transparent;
  padding: 15px;
  margin-bottom: 2px;
}

.card > .card-button {
  border: transparent;
  padding: 10px;
}

.card-button > .delete {
  width: 100%;
  border-radius: 11em;
}

.card-photo img {
  width: 100%;
  overflow: hidden;
  height: 20 0px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}

.delete {
  border: transparent;
  padding: 5px 10px;
  font-size: 14px;
  background: #c0392b;
  color: white;
}
</style>
