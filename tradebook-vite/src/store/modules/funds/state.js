export default () => ({
  wallets: [
    {
      wallet_name: "Appi kuttan",
      wallet_description: "wallet for crypto",
      wallet_id: 0,
      wallet_created_on: "15-6-21",
      wallet_expiry: "15-12-21",
      wallet_balance: 2000,
      wallet_epochs: 1,
      wallet_history: [
        {
          tx_id: 0,
          tx_mode: "deposit",
          tx_amount: "3000",
          tx_date: "15-7-21",
          tx_resolved_balance: "3000",
        },
        {
          tx_id: 1,
          tx_mode: "withdraw",
          tx_amount: "1000",
          tx_date: "15-7-21",
          tx_resolved_balance: "2000",
        },
      ],
    },
  ],
});
