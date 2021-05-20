<template>
  <div class="file-button">
    <!-- <img :src="image" alt=""> -->
    <input type="file" @change="onInputChange" name="" id="fileButton" />
    <label for="fileButton">Select</label>
  </div>
</template>

<script lang="ts">
// Add a PropOption for methods
import { Vue } from "vue-class-component";
import { Component, Emit } from "vue-property-decorator";

export default class FileButton extends Vue {
  @Emit()
  onInputChange(e) {
    return e.target.files[0];
  }
}
</script>


<style scoped>
#select {
  border: 1px solid#636e72;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: #2d3436;
  font-size: 16px;
  background-color: white;
}

#select:focus {
  outline: none;
  box-shadow: none;
}

#fileButton {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

#fileButton + label {
  border: transparent;
  color: white;
  background-color: #222f3e;
  padding: 8px 16px;
  margin: 1px;
  font-size: 14px;
  border-radius: 12em;
}

#fileButton + label {
  cursor: pointer;
}
</style>