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
