<template>
  <div class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
    <div class="flex flex-col">
      <div class="bg-white shadow-md rounded-3xl p-4">
        <div class="flex-none lg:flex">
          <div class="flex-auto ml-3 justify-evenly py-2">
            <div class="flex flex-wrap">
              <div class="w-full flex-none text-xs text-blue-700 font-medium">
                {{ wallet.wallet_description }}
              </div>
              <h2 class="flex-auto text-2xl py-3 font-bold font-medium">
                <i>{{ wallet.wallet_name }} </i>
              </h2>
            </div>
            <div class="flex py-4 text-sm text-gray-600">
              <div class="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="15"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p class="">{{ wallet.wallet_balance }}</p>
              </div>
              <div class="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p class="">{{ wallet.wallet_expiry }}</p>
              </div>
            </div>
            <div class="flex p-4 pb-2 border-t border-gray-200"></div>
            <div class="flex space-x-3 text-sm font-medium">
              <div class="flex-auto flex space-x-3">
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-white
                    px-5
                    py-2
                    shadow-xl
                    tracking-wider
                    border-2
                    text-gray-600
                    rounded-full
                    hover:bg-gray-100
                    inline-flex
                    items-center
                    space-x-2
                  "
                >
                  <span>Add Funds</span>
                </button>
              </div>
              <div class="flex-auto flex space-x-3">
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-gray-900
                    px-5
                    py-2
                    shadow-xl
                    tracking-wider
                    border
                    text-gray-600
                    rounded-full
                    hover:bg-gray-800
                    inline-flex
                    items-center
                    space-x-2
                  "
                >
                  <span>Withdraw Funds</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WalletComponent",
  props: ["wallet"],
  methods: {},
};
</script>
