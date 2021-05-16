<template>
  <div class="home">
    <h2>홈뱆에는 있읍니다</h2>
     <div class="card-group">
      <div class="card">
        <div class="card-photo">
          <img/>
        </div>
        <div class="card-name"> whatever </div>
        <div class="card-button">
          <button class="delete">Open</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'; // @ is an alias to /src
export default class Home extends Vue {}
</script>

<style scoped>
 h2 {
   text-align: center;
 }
 .card-group {
  border: transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  height: 20  0px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}



.delete {
  border: 1px solid #222f3e;
  padding: 5px 10px;
  font-size: 14px;  
  background: #222f3e;
  color: white;
}
</style>
