import * as bitcoin from 'bitcoinjs-lib';

export type ElectrumDefaults = {
  host: string;
  ssl: number;
  tcp: number;
};

export const NINTONDO_ELECTRUM_DEFAULTS: ElectrumDefaults = {
  host: 'x.cdns.trrxitte.com',
  tcp: 50001,
  ssl: 50002,
};

export const NINTONDO_NETWORK: bitcoin.networks.Network = {
  messagePrefix: '\x19Nintondo Signed Message:\n',
  bech32: 'nt',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x35, // 53 - addresses start with 'N'
  scriptHash: 0x41, // 65 - script addresses start with 'T'
  wif: 0xb5, // 181 - private key format
};

export const applyNintondoNetwork = (): bitcoin.networks.Network => {
  // bitcoinjs-lib types its exported networks as readonly; we intentionally override them at runtime
  const mutableNetworks = bitcoin.networks as unknown as Record<string, bitcoin.networks.Network>;
  mutableNetworks.bitcoin = NINTONDO_NETWORK;
  mutableNetworks.testnet = NINTONDO_NETWORK;
  // expose a named network for clarity when debugging
  // @ts-ignore bitcoinjs-lib Network type uses an index signature
  bitcoin.networks.nintondo = NINTONDO_NETWORK;
  return NINTONDO_NETWORK;
};
