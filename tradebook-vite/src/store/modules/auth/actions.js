export default {
  LOGIN: function ({ dispatch, commit }, PAYLOAD) {
    let promise = dispatch(
      "requests",
      {
        method: "POST",
        url: {
          module: "auth",
          service: "authenticator",
          points: ["BASE", "GET_TOKEN"],
        },
        headers: [{ name: "Content-Type", value: "Application/json" }],
        body: {
          email: PAYLOAD.email,
          password: PAYLOAD.password,
        },
      },
      { root: true }
    );
    promise.then((e) => {
      if (e.status == 200) {
        let response = JSON.parse(e.response);
        commit("set_tokens", {
          data: {
            access_token: response.access,
            refresh_token: response.refresh,
          },
        });
        commit("set_flags", {
          is_authenticated: true,
          is_authorized: true,
        });
        dispatch("config/viewCompiler", null, { root: true });
      }
    });
    return promise;
  },
  LOGOUT: function ({ commit, dispatch }) {
    commit("set_tokens", {
      data: {
        access_token: null,
        refresh_token: null,
      },
    });
    localStorage.removeItem("ACCTOKEN");
    localStorage.removeItem("REFTOKEN");
    commit("set_flags", {
      is_authenticated: false,
      is_authorized: false,
    });
    dispatch("config/viewCompiler", null, { root: true });
  },
  REF_TOKENS: function ({ getters, dispatch, commit }) {
    let promise = dispatch(
      "requests",
      {
        method: "POST",
        url: {
          module: "auth",
          service: "authenticator",
          points: ["BASE", "REF_TOKEN"],
        },
        headers: [{ name: "Content-Type", value: "Application/json" }],
        body: {
          refresh: getters["getTokens"].refresh_token,
        },
      },
      { root: true }
    );
    promise.then((e) => {
      let response = JSON.parse(e.response);
      let status = e.status;
      if (status == 200) {
        commit("set_tokens", {
          data: {
            access_token: response.access,
            refresh_token: getters["getTokens"].refresh_token,
          },
        });
        commit("set_flags", {
          is_authenticated: true,
          is_authorized: true,
        });
      } else {
        dispatch("LOGOUT");
      }
    });
  },
  VAL_TOKENS: function ({ dispatch, getters, commit }) {
    let promise = dispatch(
      "requests",
      {
        method: "GET",
        url: {
          module: "auth",
          service: "authenticator",
          points: ["BASE", "VAL_TOKEN"],
        },
        headers: [
          { name: "Content-Type", value: "Application/json" },
          {
            name: "Authorization",
            value: "Bearer " + getters["getTokens"].access_token,
          },
        ],
        body: {},
      },
      { root: true }
    );
    promise.then((e) => {
      if (e.status == 401) {
        dispatch("REF_TOKENS");
      } else if (e.status == 200) {
        commit("set_flags", {
          is_authenticated: true,
          is_authorized: true,
        });

      }
    });
    return promise;
  },
};
