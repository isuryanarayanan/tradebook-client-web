export default () => ({
  navigation: [
    {
      name: "Trade",
      view: "TradeView",
      hidden: false,
      href: "#",
      current: true,
    },
    {
      name: "Portfolio",
      view: "PortfolioView",
      hidden: false,
      href: "#",
      current: false,
    },
    {
      name: "Auth",
      view: "AuthView",
      hidden: true,
      href: "#",
      current: false,
    },
  ],
  default_view: "AuthView",
  current_view: "AuthView",
});
