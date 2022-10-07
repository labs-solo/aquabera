import { QueryName } from 'common/models/graphql';

type QueryMapping = {
  [queryName in QueryName]: number;
};

export const REFRESH_INTERVALS: QueryMapping = {
  [QueryName.listFarms]: 300000,
};

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42
}

type Partner = {
  name: string;
  logo: string;
  description?: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    name: '1INCH',
    logo: 'oneinch',
    description: 'Providing liquidity rewards'
  },
  {
    name: 'Balancer',
    logo: 'balancer',
    description: 'Providing liquidity rewards'
  },
  {
    name: 'Loopring',
    logo: 'loopring',
    description: 'Providing liquidity rewards'
  },
  {
    name: 'Moonbeam',
    logo: 'moonbeam',
    description: 'Providing grant funding'
  },
  {
    name: 'Solana',
    logo: 'solana',
    description: 'Providing launch support'
  },
  {
    name: 'Sushiswap',
    logo: 'sushi',
    description: 'Providing liquidity rewards'
  },
  {
    name: 'Quantstamp',
    logo: 'quantstamp',
    description: 'Audited oneToken Factory'
  },
  {
    name: 'Certik',
    logo: 'certik',
    description: 'Audited Farming Contract'
  },
  {
    name: 'Solidified',
    logo: 'solidified',
    description: 'Audited oneToken Factory'
  },
  {
    name: 'Goldin',
    logo: 'goldin',
    description: 'Community PR Firm'
  },
  {
    name: 'Accomplice Blockchain',
    logo: 'accomplice',
    description: 'Ecosystem and liquidity'
  },
  {
    name: 'Collider Ventures',
    logo: 'collider',
    description: 'Ecosystem and liquidity'
  },
  {
    name: 'First Mile Ventures',
    logo: 'first-mile',
    description: 'Ecosystem and liquidity'
  },
  {
    name: 'Fundamental Labs',
    logo: 'fundamental-labs',
    description: 'Blockchain Investment Management'
  },
  {
    name: 'TRGC Limited',
    logo: 'trgc',
    description: 'Digital Assets Venture Fund'
  },
  {
    name: 'Lattice Capital',
    logo: 'lattice',
    description: 'Investment Firm'
  },
  {
    name: 'Lightshift Capital',
    logo: 'lightshift',
    description: 'Venture Capital and Private Equity'
  },
  {
    name: 'Ashbury Ventures LLC',
    logo: 'asbury',
    description: ''
  },
  {
    name: 'LD Capital',
    logo: 'ld-capital',
    description: ''
  },
  {
    name: 'GSR Markets Limited',
    logo: 'gsr',
    description: ''
  },
  {
    name: 'Baller Ventures',
    logo: 'baller',
    description: ''
  },
  {
    name: 'COSIMO X',
    logo: 'cosimo',
    description: ''
  },
  {
    name: 'Woodstock Fund',
    logo: 'woodstock',
    description: ''
  },
  {
    name: 'Elliptic',
    logo: 'elliptic',
    description: ''
  },
  {
    name: 'Cryptoholics',
    logo: 'cryptoholics',
    description: '',
    url: 'https://cryptoholics.com/'
  },
  {
    name: 'DeFi Pulse',
    logo: 'defipulse',
    description: '',
    url: 'https://www.defipulse.com/'
  },
]

export const communityIcons = [
  {
    name: 'Discord',
    logo: 'discord.svg',
    url: 'https://discord.gg/cxPGjGTy8V'
  },
  {
    name: 'Telegram',
    logo: 'telegram.svg',
    url: 'https://t.me/ichifarm'
  },
  {
    name: 'Twitter',
    logo: 'twitter.svg',
    url: 'https://twitter.com/ichifoundation'
  },
  {
    name: 'DeFi Pulse',
    logo: 'DeFi-Pulse.svg',
    url: 'https://www.defipulse.com/'
  },
  {
    name: 'Medium',
    logo: 'medium-light.png',
    url: 'https://medium.com/ichifarm'
  }
]

export const media = [
  {
    name: 'Cointelegraph',
    logo: 'cointelegraph.png'
  },
  {
    name: 'The DeFiant',
    logo: 'The DeFiant.svg'
  },
  {
    name: 'Defiyield',
    logo: 'Defiyield.svg'
  },
  {
    name: 'Decrypt',
    logo: 'decrypt_logo.png'
  },
  {
    name: 'Cointribune',
    logo: 'Contribune.svg'
  },
  {
    name: 'CryptoQuestion',
    logo: 'CryptoQuestion.svg'
  },
]

export const navMenu = [
  {
    title: 'Community',
    link: '/community/'
  },
  {
    title: 'Governance',
    link: '/governance/'
  },
  {
    title: 'Developers',
    link: '/developers/'
  },
  {
    title: 'Partners',
    link: '/partners/'
  },
  {
    title: 'News',
    link: '/news/'
  },
  {
    title: 'Docs',
    link: 'https://docs.ichi.org/'
  },
]
