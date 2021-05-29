<template>
  <div class="create-character">
    <div class="card">
      <div class="card-content">
        <div class="input-field">
          <input type="text" v-model="name" placeholder="이름에" />
        </div>
      </div>
      <div class="row">
        <img v-if="image !== ''" :src="image" />
      </div>
      <div class="row">
        <file-button @onInputChange="getFile"></file-button>
      </div>
      <div v-if="image != ''" class="row">
        <button-general
          buttonName="Upload"
          @buttonClicked="uploadFile(file)"
          buttonColor="success"
        ></button-general>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'

import { Vue, Options } from "vue-class-component";
import FileButton from "@/components/FileButton.vue";
import ButtonGeneral from "@/components/ButtonGeneral.vue";
import { Watch } from "vue-property-decorator";

import { database, storage } from "@/firebaseConfig";

@Options({
  components: {
    "file-button": FileButton,
    "button-general": ButtonGeneral,
  },
})
export default class CreateCharacter extends Vue {

  public file!: any;
  public reader!: any;
  public image: any = "";
  public name!: string = "";

  public getFile(file: any): void {
    this.file = file;
    this.reader = new FileReader();
    this.reader.onload = (e: any): void => {
      this.image = e.target.result;
    };
    this.reader.readAsDataURL(this.file);
  }

  public uploadFile(): void {
   
  
    let name = this.name;
    let file = this.file;

    // console.log(this.name+" "+this.file.name);

    if (name !== "" && file!== "") {
      var storageRef = storage.ref("characters/" + name);
      var task = storageRef.put(file);

      task.on("state_changed", function (snapshot) {
        task.snapshot.ref.getDownloadURL().then(
          function (url) {
            database.ref("characters/" + name).set({
              name: name,
              link: url,
            });
          },
          function (err) {
            console.log(err.code);
          }
        );
      });
     
      alert("Upload successfully!");
       router.push({ name: 'Home'});
    } else {
      alert("Please provide a name or upload a photo!");
    }
  }

</script>


<style scoped>
img {
  width: 50%;
  border-radius: 3px;
}

.select_button {
  border: 1px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  background: white;
  color: #3498db;
  font-size: 16px;
  margin-left: 5px;
}

.select_image {
  border: transparent;
  padding: 10px;
  margin-bottom: 5px;
  text-align: center;
  width: 100%;
}

.create-character {
  border: transparent;
  padding: 10px;
  background: transparent;
}

.card {
  border: transparent;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 5px;
  background: white;
  margin: 5px;
}

.card-header {
  border: transparent;
  padding: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 5px;
  background: white;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  border: transparent;
  padding: 10px;
}

.card-content .input-field input {
  border: transparent;
  border-radius: 3px;
  font-size: 15px;
  background: #ecf0f1;
  padding: 10px;
  width: 100%;
  margin-bottom: 4px;
  box-sizing: border-box;
  outline: none;
}

.card-content .input-field select {
  border: #ecf0f1 1px solid;
  border-radius: 3px;
  font-size: 15px;
  padding: 10px;
  min-width: 100%;
  margin-bottom: 4px;
  appearance: none;
  -webkit-appearance: none;
}

.row {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  border-radius: 15px;
  color: #fafafa;
  margin-right: 4px;
  outline: none;
}
</style>