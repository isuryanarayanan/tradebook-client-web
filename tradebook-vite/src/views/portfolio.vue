<template>
  <div class="portfolio">
    <div class="content w-10/12 m-auto">
      <div class="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
        <div class="mr-6">
          <h2
            class="
              text-3xl
              md:text-4xl
              font-semibold
              tracking-tight
              leading-7
              md:leading-10
              mb-1
            "
          >
            Manage Your Wallets
          </h2>
          <div class="font-base tracking-tight text-gray-600">
            Wallets hold your funds which is used for trading in the system, you
            can have multiple wallets.
          </div>
        </div>
        <div class="flex items-center">
          <button
            class="
              bg-gray-900
              px-5
              py-2
              text-sm
              shadow-sm
              font-semibold
              tracking-wider
              text-white
              rounded-full
              hover:bg-gray-800
            "
            @click="AddWallet()"
          >
            Add Wallet
          </button>
        </div>
      </div>
      <div class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div class="wallet" v-for="w in wallets" :key="w.wallet_id">
          <WalletComponent :wallet="w" />
        </div>
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

<style lang="scss"></style>
