<template>
  <button class="button_general" @click="clicked">
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Emit } from "vue-property-decorator";
import { Vue } from "vue-class-component";

@Component
export default class ButtonGeneral extends Vue {
  @Prop(String) readonly buttonName!: string;

  @Emit("clicked")
  clicked(){}
}
</script>

<style scoped>
.button_general {
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  background: black;
  color: white;
  font-size: 16px;
}
</style>