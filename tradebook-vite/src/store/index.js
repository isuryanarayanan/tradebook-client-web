import { createStore } from "vuex";
import config from "./modules/config/index";
import auth from "./modules/auth/index";
import funds from "./modules/funds/index";
import requests from "./requests";
export default createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {
    requests,
  },
  modules: {
    config,
    auth,
    funds,
  },
});
