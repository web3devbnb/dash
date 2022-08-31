import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 2, 3, 4, 5, 56, 97],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545" },
  qrcode: true,
  pollingInterval: 12000,
});
