<script setup lang="ts">
import StepNode from "./StepNode.vue";
</script>

<template>
  <div class="flex flex-row items-center w-full">
    <StepNode class="z-20" />
    <div class="z-10 h-1 w-full bg-accent-blue-300"></div>
    <StepNode class="z-20" />
  </div>
</template>
