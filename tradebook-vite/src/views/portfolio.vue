<template>
  <div class="portfolio p-5">
    <div class="flex flex-wrap h-screen">
      <div
        class="
          w-full
          md:w-2/2
          lg:w-1/4
          overflow-y-scroll
          rounded-3xl
          h-screen
          no-scrollbar
        "
      >
        <div class="flex px-5">
          <div class="">
            <div id="wallet-header" class="py-5 text-white w-full">
              <h1 class="text-3xl font-bold pb-5">Your Wallets</h1>
              <button
                class="
                  mb-4
                  bg-gray-800
                  px-5
                  py-2
                  shadow-xl
                  text-gray-500
                  rounded-full
                  hover:bg-gray-100
                  inline-flex
                  items-center
                  space-x-2
                "
              >
                <span>Add Wallet</span>
              </button>
              <p class="italic text-gray-500 w-10/12">
                Your wallets allow you to split up your funds to be spend on
                different asset classes.
                <span class="text-gray-400"
                  >You can have multiple wallets.</span
                >
              </p>
            </div>
            <div class="flex flex-row flex-wrap gap-1 w-full">
              <div v-for="w in wallets" :key="w.wallet_id" class="">
                <WalletComponent :wallet="w" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/2 lg:w-3/4">
        <div class="flex m-auto">
          <div class="investments py-5">
            <div class="content">
              <h1 class="text-3xl font-bold text-white pb-5">
                Your Investments
              </h1>
              <p class="w-8/12 italic text-gray-500">
                Use your wallets to invest in assets and track them accordingly
                here.
                <span class="text-gray-400"
                  >You can only invest in wallets associated with the asset
                  class.</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-12/12 bg-gray-900 overflow-hidden">
      <div class="flex flex-row flex-wrap">
        <div class="w-7/12 px-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import WalletComponent from "../components/Wallet.vue";
import { mapGetters } from "vuex";
export default {
  name: "PortfolioView",
  components: {
    WalletComponent,
  },
  computed: {
    ...mapGetters({
      wallets: "funds/getWallets",
    }),
  },
  methods: {
    AddWallet: function () {
      alert(1);
    },
  },
};
</script>

<style >
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
