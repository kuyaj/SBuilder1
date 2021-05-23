<template>
  <button class="button_general" @click="buttonClicked">
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Emit } from "vue-property-decorator";
import { Vue } from "vue-class-component";

@Component
export default class ButtonGeneral extends Vue {
  @Prop(String) readonly buttonName!: string;
  @Emit("buttonClicked")
  buttonClicked() {}
}
</script>

<style scoped>
.button_general {
  border: 1px solid #222f3e;
  border-radius: 20px;
  padding: 8px;
  width: 100%;
  background: #222f3e;
  color: white;
  font-size: 14px;
}

button:focus {
  outline: none;
}
</style>