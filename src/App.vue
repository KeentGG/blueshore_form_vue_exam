<template>
  <div id="app">
    <main class="min-h-screen h-px max-w-screen-xl w-full mx-auto px-4 flex flex-col">
      <div class="relative h-full flex flex-col justify-start items-center py-4 flex-1">
        <div class="w-full px-24 my-6">
          <StepLoader :stepList="stepList" />
        </div>
        <div class="h-full w-full flex flex-col justify-between items-center">
          <div class="w-full flex xl:flex-row flex-col mt-12 gap-5">
            <div class="w-full border border-slate-200 rounded-2xl px-6 py-5 flex-[5] xl:max-w-[700px]">
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
                  <FormField label="Company Name" />
                </div>
                <div class="flex flex-row w-full gap-4 flex-wrap">
                  <FormField class="w-full flex-1 min-w-[15rem]" label="First Name" isRequired />
                  <FormField class="w-full flex-1 min-w-[15rem]" label="Last Name" isRequired />
                </div>
                <div class="w-full">
                  <FormField label="Telephone" isRequired />
                </div>
                <div class="w-full">
                  <FormField label="Email Address (Business)" isError isRequired />
                </div>
                <div class="flex flex-row w-full gap-4 flex-wrap">
                  <div class="relative w-full flex-1 min-w-[15rem]">
                    <FormField label="Password" isRequired />
                    <div class="absolute w-full flex flex-row gap-2 mt-2 px-1">
                      <div class="h-[3px] w-full bg-red-400 rounded-full"></div>
                      <div class="h-[3px] w-full bg-slate-200 rounded-full"></div>
                      <div class="h-[3px] w-full bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                  <FormField label="Confirm Password" class="w-full flex-1
                    min-w-[15rem]" isRequired />
                </div>
                <div class="flex flex-row mt-4 gap-2">
                  <input type="checkbox" class="" />
                  <label id="agree-terms" class="text-sm text-slate-500
                    font-semibold">I agree with the
                    <a class="hover:cursor-pointer hover:bg-sky-100 text-sky-500
                      font-semibold">Terms and
                      Conditions</a></label>
                </div>
                <div class="flex flex-row w-full justify-end mt-4">
                  <Button class="w-full sm:w-auto"></Button>
                </div>
              </div>
            </div>
            <div class="w-full border border-accent-yellow-500/50 rounded-2xl bg-accent-yellow-200
            flex-[3] p-6 flex-col flex overflow-hidden xl:max-w-[500px] min-h-[40rem]">
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-slate-700 mb-4 mt-3">
                  Why Should You?
                </h2>
                <ul class="why-container flex flex-col gap-2">
                  <li v-for="item in whyList">{{ item }}</li>
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
                <div class="z-0 border-t-[calc(3rem+10vw)] border-t-transparent
              border-r-[100vw] xl:border-r-[40rem] border-r-accent-yellow-500"></div>
                <div class="h-[10rem] w-full bg-accent-yellow-500"></div>
              </div>
              <div class="z-20 relative mt-auto flex flex-col gap-1 backdrop-blur-md bg-white/45 p-4 rounded-xl">
                <div class="flex flex-row items-end gap-1.5">
                  <TrustpilotBrandIcon class="max-w-[7rem]" />
                </div>
                <div class="flex flex-row justify-between items-center flex-wrap gap-1">
                  <div class="text-slate-600 mr-1">Excellent <span class="text-slate-800 font-semibold">4.8</span> out
                    of 5
                  </div>
                  <img class="max-w-[8rem]" src="/public/icons/TrustpilotStarsIcon.svg" alt="5 stars" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full justify-start mt-10 pb-4 gap-1">
            <div class="text-slate-500 text-xs font-medium">Do you want to speak to someone immediately?</div>
            <div class="flex flex-row gap-2">
              <div>
                <PhoneIcon />
              </div>
              <div class="font-medium text-sm text-slate-800">0800-PHONE-ME</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import StepLoader from "./components/ui/StepLoader.vue";
import FormField from "./components/ui/FormField.vue";
import Button from "./components/ui/Button.vue";
import TrustpilotBrandIcon from "./components/icons/TrustpilotBrandIcon.vue"
import PhoneIcon from "./components/icons/PhoneIcon.vue"

export default {
  name: 'App',
  components: {
    StepLoader,
    FormField,
    Button,
    TrustpilotBrandIcon,
    PhoneIcon,
  },
  data() {
    return {
      stepList: [
        {
          content: "1",
          label: "Setup An Account",
          isDone: false,
        },
        {
          content: "2",
          label: "Done!",
          isDone: true,
        },
      ],
      whyList: ["USP 1", "USP 2", "USP 3"]
    }
  }
}

</script>

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
