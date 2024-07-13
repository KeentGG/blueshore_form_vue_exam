<template>
  <div>
    <Label class="text-xs text-slate-500 font-semibold">{{ label }}<span v-if="isRequired">*</span></Label>
    <input class="focus:outline-accent-blue-500 w-full py-2 px-2 rounded-lg border border-slate-300" :class="{
      'border-red-300': isError
    }"></input>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
      required: false,
      default: 'Field Label'
    },
    isError: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>
