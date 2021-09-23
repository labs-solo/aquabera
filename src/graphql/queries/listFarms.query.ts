import { gql } from '@apollo/client';

export const listFarmsQuery = gql`
query listFarms {
  listFarms {
    items {
      isDeposit
      yearlyAPY
      chainId
      tvl
      farmTVL
      lpName
    }
  }
}
`;
