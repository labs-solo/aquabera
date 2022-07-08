// import CountDown from 'containers/CryptoModern/CountDown';
// import Image from 'common/components/Image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import BannerWrapperOuter, { StyledBackgroundGradient } from './banner.style';
// import { useQuery } from '@apollo/client';
// import { ChainId, REFRESH_INTERVALS } from 'common/constants/constants';
// import { QueryItemsResponse, QueryName } from 'common/models/graphql';
// import { AppSyncFarmAPY } from 'common/models/farm';
// import { listFarmsQuery } from 'graphql/queries/listFarms.query';

type Props = {
}

const Banner: React.FC<Props> = (props) => {

  // const { loading: loadingFarms, error: errorLoadingFarms, data: dataFarms, networkStatus: networkStatusFarms, refetch: refetchFarms } = useQuery<QueryItemsResponse<AppSyncFarmAPY>>(listFarmsQuery, {
  //   // Fetch the list of farms if there is no urlPoolId
  //   fetchPolicy: 'cache-and-network',
  //   pollInterval: REFRESH_INTERVALS[QueryName.listFarms]
  // });
  // const appSyncFarms: AppSyncFarmAPY[] = dataFarms?.listFarms?.items || [];

  // const farm = appSyncFarms.filter(farm => farm.isPosition && farm.chainId === ChainId.MAINNET && farm.displayName === 'oneUNI Vault')
  //   .reduce( ( (prev, current) => ((prev.yearlyAPY + prev.vaultIRR) > (current.yearlyAPY + current.vaultIRR)) ? prev : current), 
  //   {isPosition: true, 
  //     yearlyAPY: 0,
  //     chainId: 0,
  //     tvl: 0,
  //     farmTVL: 0,
  //     lpName: '',
  //     displayName: '',
  //     vaultIRR: 0
  //   }); 

  // const maxAPY = parseInt((farm.yearlyAPY + farm.vaultIRR).toString());
  // const bannerMessage = maxAPY ? `Deposit ${farm.displayName.replace(' Vault', '')} into the ${farm.displayName} and earn up to ${maxAPY}% ROI`: ""; 
  const bannerMessage = 'Click here to deposit into an ICHI Angel Vault';
  return (
    <BannerWrapperOuter id="home">
      <StyledBackgroundGradient>
        <OutboundLink href="https://app.ichi.org/vault" target="_blank" className="medium color-white">
          {bannerMessage} &rarr;
        </OutboundLink>
      </StyledBackgroundGradient>
   </BannerWrapperOuter>        

  );
};

export default Banner;
