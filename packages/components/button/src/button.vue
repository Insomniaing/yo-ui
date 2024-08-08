<template>
  <div class="yo-button" @click="selectButton">按钮</div>
</template>

<script setup>
defineOptions({
  name: "YoButton",
});
const selectButton = () => {
  console.log(11111);
};
</script>

<style scoped>
.yo-button {
  color: red;
}
</style>
