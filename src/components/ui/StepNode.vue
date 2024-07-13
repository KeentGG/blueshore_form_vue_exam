<template>
  <div class="relative">
    <div class="p-3 bg-accent-blue-500 border-[3px] border-blue-200 rounded-full leading-[0.5em]" :class="{
      'bg-blue-200 text-blue-800/25': isDone,
      'text-white': !isDone,
    }">
      {{ content }}
    </div>
    <div class="absolute mt-1 font-medium whitespace-nowrap left-1/2 -translate-x-1/2" :class="{
      'text-slate-400': isDone,
      'text-slate-600': !isDone
    }">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "StepNode",
  props: {
    content: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  }
} 
</script>
