// import CountDown from 'containers/CryptoModern/CountDown';
// import Image from 'common/components/Image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import BannerWrapperOuter, { StyledBackgroundGradient } from './banner.style';
import { useQuery } from '@apollo/client';
import { REFRESH_INTERVALS } from 'common/constants/constants';
import { QueryItemsResponse, QueryName } from 'common/models/graphql';
import { AppSyncFarmAPY } from 'common/models/farm';
import { listFarmsQuery } from 'graphql/queries/listFarms.query';

type Props = {
}

const Banner: React.FC<Props> = (props) => {

  const { loading: loadingFarms, error: errorLoadingFarms, data: dataFarms, networkStatus: networkStatusFarms, refetch: refetchFarms } = useQuery<QueryItemsResponse<AppSyncFarmAPY>>(listFarmsQuery, {
    // Fetch the list of farms if there is no urlPoolId
    fetchPolicy: 'cache-and-network',
    pollInterval: REFRESH_INTERVALS[QueryName.listFarms]
  });
  const appSyncFarms: AppSyncFarmAPY[] = dataFarms?.listFarms?.items || [];

  // only display major vaults: USDC - 20006, wBTC - 1028
  const isMajorVault = (poolId: number) => {
    return (poolId === 20006 || poolId === 1028);
  };

  const farm = appSyncFarms.filter(farm => farm.isPosition && isMajorVault(farm.poolId))
    .reduce( ( (prev, current) => ((prev.vaultIRR) > (current.vaultIRR)) ? prev : current), 
    {isPosition: true, 
      yearlyAPY: 0,
      chainId: 0,
      tvl: 0,
      farmTVL: 0,
      lpName: '',
      displayName: '',
      vaultIRR: 0,
      poolId: 0
    }); 

  const maxAPY = parseInt(farm.vaultIRR.toString());
  // USDC - 20006 is angel vault, wBTC - 1028 is hodl vault
  const isHodlVault = farm.poolId === 1028 || farm.poolId !== 20006;
  // wbtc vault displayName is lower case in sdk. When it's changed in sdk, this line can be removed; displayNameTmp replaced with farm.displayName
  const displayNameTmp = farm.displayName.replace(' vault', ' Vault').replace('wbtc', 'wBTC');
  const displayName = isHodlVault ? displayNameTmp.replace(' Vault', ' HODL Vault') : displayNameTmp.replace(' Vault', 'Angel Vault');
  const bannerMessage = maxAPY 
    ? `The ${displayName} has earned ${maxAPY}% IRR since inception. Click to supply ${displayNameTmp.replace(' Vault', '')}`
    : "Click here to deposit into an ICHI Angel Vault"; 

  const bannerLink = maxAPY
    ? ( isHodlVault ? `https://app.ichi.org/hodlvault?poolId=${farm.poolId}` : `https://app.ichi.org/vault?poolId=${farm.poolId}`)
    : "https://app.ichi.org/vault"
  return (
    <BannerWrapperOuter id="home">
      <StyledBackgroundGradient>
        <OutboundLink href={bannerLink} target="_blank" className="medium color-white">
          {bannerMessage} &rarr;
        </OutboundLink>
      </StyledBackgroundGradient>
   </BannerWrapperOuter>        

  );
};

export default Banner;
