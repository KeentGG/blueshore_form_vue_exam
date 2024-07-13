<template>
  <div class="flex flex-row items-center w-full">
    <template v-for="(step, i) in stepList">
      <div v-if="i > 0" class="z-10 h-1 w-full bg-accent-blue-300"></div>
      <StepNode class="z-20" :content="step.content" :label="step.label" :isDone="step.isDone" />
    </template>
  </div>
</template>

<script lang="ts">
import StepNode from "./StepNode.vue";

export default {
  name: 'StepLoader',
  components: {
    StepNode,
  },
  props: {
    stepList: {
      type: Array,
      default: () => [{ content: "1", label: "Step 1", isDone: false }],
    }
  }
}
</script>
