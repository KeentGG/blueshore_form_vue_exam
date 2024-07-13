<script setup lang="ts">
import StepLoader from "./components/ui/StepLoader.vue";
import FormField from "./components/ui/FormField.vue";
import Button from "./components/ui/Button.vue";
</script>

<template>
  <div id="app">
    <main class="min-h-screen h-px max-w-screen-xl w-full mx-auto px-4 flex flex-col">
      <div class="relative h-full flex flex-col justify-start items-center py-4 flex-1">
        <div class="w-full px-24 my-6">
          <StepLoader />
        </div>
        <div class="h-full flex flex-col justify-between items-center">
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
            <div class="w-full border border-accent-yellow-500/50 rounded-xl bg-accent-yellow-200
            flex-[3] p-6 flex-col flex overflow-hidden">
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-slate-700 mb-4 mt-3">
                  Why Should You?
                </h2>
                <ul class="why-container flex flex-col gap-2">
                  <li>USP 1</li>
                  <li>USP 2</li>
                  <li>USP 3</li>
                </ul>
                <div class="px-4 py-5 rounded-xl mt-6 bg-accent-yellow-50 border
                border-accent-yellow-300">
                  <div class="flex flex-row items-center gap-3">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#FFC100"
                        fill="none" class="size-10">
                        <path
                          d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M12 1.99902V2.99902" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M22 11.999H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M3 11.999H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div class="text-slate-700">
                      <span class="font-semibold">Tips: </span>password must be at
                      least 8 characters and contain at least 1 capital and 1
                      number.
                    </div>
                  </div>
                </div>
              </div>
              <img class="max-w-[16rem] w-full absolute bottom-0 left-1/2 -translate-x-1/2
              translate-y-[60%] z-10" src="public/images/girl_pose.png" alt="" />
              <div class="absolute bottom-0 w-full flex flex-col -ml-6">
                <div class="z-0 border-t-[8rem] border-t-transparent
              border-r-[40rem] border-r-accent-yellow-500"></div>
                <div class="h-[10rem] w-full bg-accent-yellow-500"></div>
              </div>
              <div class="z-20 relative mt-auto flex flex-col gap-1 backdrop-blur-md bg-white/45 p-4 rounded-xl">
                <div class="flex flex-row items-end gap-1.5">
                  <div class="bg-emerald-500 p-4 rounded-full"></div>
                  <div class="text-lg font-semibold text-slate-700 leading-6">Trustpilot</div>
                </div>
                <div class="flex flex-row justify-between items-center">
                  <div class="text-slate-600">Excellent <span class="text-slate-800 font-semibold">4.8</span> out of 5
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
          <div class="flex flex-col w-full justify-start mt-10 gap-1">
            <div class="text-slate-500 text-xs font-medium">Do you want to speak to someone immediately?</div>
            <div class="flex flex-row gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffc100"
                  fill="none">
                  <path d="M13 3C17.4183 3 21 6.58172 21 11M13.5 6.5C15.7091 6.5 17.5 8.29086 17.5 10.5"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div class="font-medium text-sm text-slate-800">0800-PHONE-ME</div>
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
    @apply text-slate-500 pl-8;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1.5rem;
      height: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFC100' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' /%3E%3C/svg%3E%0A");
    }
  }
}
</style>
