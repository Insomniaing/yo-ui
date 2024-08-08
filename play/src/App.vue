<template>
  测试

  <yo-button></yo-button>
  <custom-column
    :customColumnData="customColumnData"
    localKey="table-1"
  ></custom-column>
</template>
<script setup>
import { customColumnData } from "./constants.js";
// import YoButton from "@yo-ui/components/button/src/button.vue";
import CustomColumn from "@yo-ui/components/CustomColumn/src/custom-column.vue";
// console.log(YoButton);
</script>

<style scoped></style>
