import { gql } from '@apollo/client';

export const listFarmsQuery = gql`
query listFarms {
  listFarms {
    items {
      isDeposit
      isPosition
      yearlyAPY
      vaultIRR
      chainId
      tvl
      farmTVL
      lpName
      displayName
      vaultIRR
      poolId
    }
  }
}
`;
