import { gql } from '@apollo/client';

export const listMonitorVaultsQuery = gql`
  query ListMonitorVaults {
    listMonitorVaults {
      items {
        name
        address
        displayName
        memberTokenRatio
        baseTokenValue
        pendingDeposits
        pendingDepositsRatio
        vaultStrength
        tvl
        sevenDaysChange
        scarceTokenValue
        scarceTokenMarketCap
        vaultIRR
        vaultIrrAllTx
        isHodlVault
        needRebalanceFrom
        lastRebalance
        isInverted
        wallPrice
        poolAddress
        scarceTokenPriceFromVault
        targetVaultStrength
      }
    }
  }
`;
