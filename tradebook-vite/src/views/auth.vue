<template>
  <div class="auth flex flex-row flex-wrap">
    <div :hidden="view_component()" class="auth-component login m-auto">
      <Login />
    </div>
    <div :hidden="!view_component()" class="auth-component register m-auto">
      <Register />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { mapGetters } from "vuex";
export default {
  name: "AuthView",
  components: {
    Login,
    Register,
  },
computed: { ...mapGetters({ auth_component_view: "auth/getAuthComponentView" }) },
  methods: {
    view_component: function () {
      return this.auth_component_view;
    },
  },
};
</script>

<style>
.auth-component {
  height: 90vh;
  width: 100%;
}
</style>
