<template>
  <button
    class="button_general"
    @click="buttonClicked"
    :class="[buttonColor, buttonSize, buttonFullwidth]"
  >
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import { Prop, Emit } from "vue-property-decorator";
import { Vue } from "vue-class-component";

export default class ButtonGeneral extends Vue {
  @Prop(String) readonly buttonName!: string;
  @Prop(String) buttonColor!: string | undefined;
  @Prop(String) buttonSize!: string;
  @Prop({ default: false }) buttonFullwidth!: boolean;

  @Emit("buttonClicked")
  buttonClicked() {}
}
</script>

<style scoped>
.button_general {
  border: 1px solid #222f3e;
  border-radius: 20px;
  padding: 8px;
  width: 100px;
  background: #222f3e;
  color: white;
  font-size: 14px;
}

.success {
  border: 1px solid #00c58e;
  color: white;
  background: #00c58e;
  font-weight: 600;
}

.fullWidth {
  width: 100%;
}

button:focus {
  outline: none;
}
</style>