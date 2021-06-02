export default () => ({
  endpoints: {
    BASE: "http://127.0.0.1:8000",
  },
  navigation: [
    {
      name: "Trade",
      view: "TradeView",
      hidden: false,
      href: "#",
      current: true,
      view_mode: "AuthorizedView",
    },
    {
      name: "Portfolio",
      view: "PortfolioView",
      hidden: false,
      href: "#",
      current: false,
      view_mode: "AuthorizedView",
    },
    {
      name: "Sign In / Register",
      view: "AuthView",
      hidden: true,
      href: "#",
      current: false,
      view_mode: "UnAuthorizedView",
    },
  ],
  default_view: "AuthView",
  current_view: "AuthView",
  current_view_mode: "UnAuthorizedView",
});
