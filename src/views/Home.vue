

<template>
  <div class="home">
    <div class="card-group">
      <div class="card" v-for="(item, key) in characters" :key="key">
        <div class="card-photo">
          <img :src="item.photo" />
        </div>
        <div class="card-name">{{ item.name }}</div>
        <div class="card-button">
          <button-general
            buttonSize="fullWidth"
            @buttonClicked="deleteFile(item)"
            buttonName="지우다"
          >
          </button-general>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import router from '@/router'

import { database, storage} from '../firebaseConfig';
import ButtonGeneral  from '../components/ButtonGeneral.vue';

class Character {
  name:string;
  photo:string;
}


import { Options, Vue } from 'vue-class-component';


@Options({
  components: {
    "button-general": ButtonGeneral,
  },
})
export default class Home extends Vue {


public characters: Character[] = [];
public fileRef: any;

deleteFile(character: any):void {
   var fileRef = storage.refFromURL(character.photo);

   let answer = confirm("너가 진짜 삭제하고싶어요?");
   if (answer == true){
      fileRef
        .delete()
        .then(function () {
          database.ref("/characters/" + character.name).remove();
           alert("파일이 삭제되었어");
        })
        .catch(function (error) {
          console.log(error);
        });
   } 
   else {
     alert("파일이 삭제되지 않았어!");
   }

}
     

created(){
 
     database.ref("characters").on("value", (snapshot) => {
      let character = Object.entries(
        snapshot.val()).map((item) => {
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
  grid-gap: 3px;
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
