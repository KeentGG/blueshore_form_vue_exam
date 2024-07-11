<script setup lang="ts">
import StepLoader from "./components/ui/StepLoader.vue";
import FormField from "./components/ui/FormField.vue";
import Button from "./components/ui/Button.vue";
</script>

<template>
  <div id="app">
    <main class="h-full max-w-screen-xl w-full mx-auto px-4">
      <div class="flex flex-col justify-start items-center py-4">
        <div class="w-full px-24 my-6">
          <StepLoader />
        </div>
        <div class="w-full flex flex-row mt-12 gap-5">
          <div class="w-full border border-slate-200 rounded-xl px-6 py-5 flex-[5]">
            <h2 class="text-2xl font-semibold text-slate-800">
              Lorem Ipsum dolor sit amet
            </h2>
            <p class="text-slate-500 font-sm font-medium max-w-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              tempor nibh. Aliquam nibh dui, vulputate ac sollicitudin et,
              laoreet id elit.
            </p>
            <div class="h-px w-full bg-slate-200/75 my-4"></div>
            <div class="flex flex-col gap-3">
              <div class="w-full">
                <FormField />
              </div>
              <div class="flex flex-row w-full gap-4">
                <FormField class="w-full" />
                <FormField class="w-full" />
              </div>
              <div class="w-full">
                <FormField />
              </div>
              <div class="w-full">
                <FormField />
              </div>
              <div class="flex flex-row w-full gap-4">
                <div class="relative w-full">
                  <FormField />
                  <div class="absolute w-full flex flex-row gap-2 mt-2 px-1">
                    <div class="h-[3px] w-full bg-red-400 rounded-full"></div>
                    <div class="h-[3px] w-full bg-slate-200 rounded-full"></div>
                    <div class="h-[3px] w-full bg-slate-200 rounded-full"></div>
                  </div>
                </div>
                <FormField class="w-full" />
              </div>
              <div class="flex flex-row mt-4 gap-2">
                <input type="checkbox" class="" />
                <label id="agree-terms" class="text-sm text-slate-500 font-semibold">I agree with
                  <a class="hover:cursor-pointer hover:bg-blue-100 text-blue-400 font-semibold">terms and
                    conditions</a></label>
              </div>
              <div class="flex flex-row w-full justify-end">
                <Button></Button>
              </div>
            </div>
          </div>
          <div
            class="w-full border border-accent-yellow-500/50 rounded-xl bg-accent-yellow-200 flex-[4] p-6 flex-col flex">
            <div class="flex flex-col">
              <h2 class="text-xl font-semibold text-slate-700 mb-4 mt-3">
                Why Should You?
              </h2>
              <ul class="why-container flex flex-col gap-2">
                <li>USP 1</li>
                <li>USP 2</li>
                <li>USP 3</li>
              </ul>
              <div class="px-4 py-5 rounded-xl mt-12 bg-accent-yellow-50 border border-accent-yellow-300">
                <div class="flex flex-row gap-3">
                  <div class="bg-accent-yellow-300 rounded-full p-4"></div>
                  <div class="text-slate-700">
                    <span class="font-semibold">Tips: </span>password must be at
                    least 8 characters and contain at least 1 capital and 1
                    number.
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mt-auto flex flex-col gap-1 backdrop-blur-md bg-white/45 p-4 rounded-xl">
              <div class="flex flex-row items-end gap-1.5">
                <div class="bg-emerald-500 p-4 rounded-full"></div>
                <div class="text-lg font-semibold text-slate-700 leading-6">Trustpilot</div>
              </div>
              <div class="flex flex-row justify-between items-center">
                <div class="text-slate-500">Excellent <span class="text-slate-600 font-semibold">4.8</span> out of 5
                </div>
                <div class="flex flex-row gap-0.5">
                  <div class="bg-emerald-500 p-3.5 rounded-full"></div>
                  <div class="bg-emerald-500 p-3.5 rounded-full"></div>
                  <div class="bg-emerald-500 p-3.5 rounded-full"></div>
                  <div class="bg-emerald-500 p-3.5 rounded-full"></div>
                  <div class="bg-emerald-500 p-3.5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.why-container {
  li {
    @apply text-slate-500;
  }
}
</style>
