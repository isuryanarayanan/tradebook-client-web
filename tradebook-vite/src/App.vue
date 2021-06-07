<template>
  <div class="app bg-gray-900">
    <Toolbar />
    <component v-bind:is="getCurrentView" />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import PortfolioView from "./views/portfolio.vue";
import TradeView from "./views/trade.vue";
import AuthView from "./views/auth.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      getCurrentView: "config/getCurrentView",
    }),
  },
  components: {
    Toolbar,
    PortfolioView,
    TradeView,
    AuthView,
  },
  mounted: function () {
    this.$store.dispatch("auth/VAL_TOKENS").then(() => {
      this.$store.dispatch("config/viewCompiler");
    });
  },
};
</script>

<style >
</style>
