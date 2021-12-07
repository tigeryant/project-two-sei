
// TODO: Replace with: https://api.exchange.coinbase.com/currencies
export const coinTickers = [
  // copied from CB currency response:
  {
    id: 'BTC',
    name: 'Bitcoin',
    min_size: '0.00000001',
    status: 'online',
    message: '',
    max_precision: '0.00000001',
    convertible_to: [],
    details: {
      type: 'crypto',
      symbol: '₿',
      network_confirmations: 3,
      sort_order: 20,
      crypto_address_link: 'https://live.blockcypher.com/btc/address/{{address}}',
      crypto_transaction_link: 'https://live.blockcypher.com/btc/tx/{{txId}}',
      push_payment_methods: [
        'crypto'
      ],
      group_types: [
        'btc',
        'crypto'
      ],
      display_name: null,
      processing_time_seconds: null,
      min_withdrawal_amount: 0.0001,
      max_withdrawal_amount: 2400,
    },
  },
  {
    id: 'ETH',
    name: 'Ether',
    min_size: '0.00000001',
    status: 'online',
    message: '',
    max_precision: '0.00000001',
    convertible_to: [],
    details: {
      type: 'crypto',
      symbol: 'Ξ',
      network_confirmations: 35,
      sort_order: 25,
      crypto_address_link: 'https://etherscan.io/address/{{address}}',
      crypto_transaction_link: 'https://etherscan.io/tx/0x{{txId}}',
      push_payment_methods: [
        'crypto'
      ],
      group_types: [
        'eth',
        'crypto'
      ],
      display_name: null,
      processing_time_seconds: null,
      min_withdrawal_amount: 0.001,
      max_withdrawal_amount: 7450,
    },
  },
  // placeholders;
  { id: 'BNB', name: 'Binance Coin' },
  { id: 'SOL', name: 'Solana' },
  { id: 'ADA', name: 'Cardano' },
  { id: 'XRP', name: 'XRP' },
  { id: 'DOT', name: 'Polkadot' },
  { id: 'WLUNA', name: 'Terra' },
  { id: 'DOGE', name: 'Dogecoin' },
  { id: 'AVAX', name: 'Avalanche' }
]