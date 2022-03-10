// import CountDown from 'containers/CryptoModern/CountDown';
// import Image from 'common/components/Image';
import { StyledFlexCenter } from 'common/styles/common.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerWrapperOuter, { StyledBackgroundGradient } from './banner.style';
import { useQuery } from '@apollo/client';
import { ChainId, REFRESH_INTERVALS } from 'common/constants/constants';
import { QueryItemsResponse, QueryName } from 'common/models/graphql';
import { AppSyncFarmAPY } from 'common/models/farm';
import { listFarmsQuery } from 'graphql/queries/listFarms.query';
import ImageBgHero from 'common/assets/image/light/bg_hero.jpg';
import ImageBgAngelVaults from 'common/assets/image/light/bg_angel_vaults.jpg';
import ImageBgHeroExt from 'common/assets/image/light/bg_hero_ext.jpg';
import ImageBgAngelVaultsExt from 'common/assets/image/light/bg_angel_vaults_ext.jpg';
import ImageBgHeroMobile from 'common/assets/image/light/bg_hero_mobile.jpg';
import ImageBgAngelVaultsMobile from 'common/assets/image/light/bg_angel_vaults_mobile.jpg';
import MediaQuery from 'react-responsive';
import BannerCarousel from 'common/components/BannerCarousel/BannerCarousel';

type Props = {
}

    // {/* <CountDown />  */}
const Banner: React.FC<Props> = (props) => {
  // NOTE: TODO: Next try https://stackoverflow.com/questions/55839971/how-to-prevent-gatsby-image-from-blurring-a-logo-with-every-reload/55859893
  // GatsbyImageSharpFixed_noBase64 or GatsbyImageSharpFluid_noBase64
  // While this does work somewhat, it's elegant, but there is this bizare placeholder
  // rectangle in the upper left I can't get rid of yet

  // References:
  // - https://github.com/gatsbyjs/gatsby/discussions/27950
  // - https://stackoverflow.com/questions/55839971/how-to-prevent-gatsby-image-from-blurring-a-logo-with-every-reload
  // - https://www.gatsbyjs.com/plugins/gatsby-background-image/
  // - https://www.gatsbyjs.com/plugins/gatsby-image/#gatsby-image-props
  // fluid(quality: 100, maxWidth: 1440) {
  //   ...GatsbyImageSharpFluid
  // }

  const { loading: loadingFarms, error: errorLoadingFarms, data: dataFarms, networkStatus: networkStatusFarms, refetch: refetchFarms } = useQuery<QueryItemsResponse<AppSyncFarmAPY>>(listFarmsQuery, {
    // Fetch the list of farms if there is no urlPoolId
    fetchPolicy: 'cache-and-network',
    pollInterval: REFRESH_INTERVALS[QueryName.listFarms]
  });
  const appSyncFarms: AppSyncFarmAPY[] = dataFarms?.listFarms?.items || [];
  // appSyncFarms.map((farm) => (console.log(` ${farm.displayName} --- irr: ${farm.vaultIRR}`)));
  const farm = appSyncFarms.filter(farm => farm.isPosition && farm.chainId === ChainId.MAINNET && farm.displayName === 'oneUNI Vault')
    .reduce( ( (prev, current) => ((prev.yearlyAPY + prev.vaultIRR) > (current.yearlyAPY + current.vaultIRR)) ? prev : current), 
    {isPosition: true, 
      yearlyAPY: 0,
      chainId: 0,
      tvl: 0,
      farmTVL: 0,
      lpName: '',
      displayName: '',
      vaultIRR: 0
    }); 
  const maxAPY = parseInt((farm.yearlyAPY + farm.vaultIRR).toString());
  const bannerMessage = maxAPY ? `Deposit ${farm.displayName.replace(' Vault', '')} into the ${farm.displayName} and earn up to ${maxAPY}% ROI`: ""; 

  return (
    <>
      <BannerWrapperOuter id="home">
        <StyledBackgroundGradient>
          <StyledFlexCenter>
            <OutboundLink href="https://app.ichi.org/vault" target="_blank" className="medium color-white">
              {bannerMessage} &rarr;
            </OutboundLink>
          </StyledFlexCenter>
        </StyledBackgroundGradient>

        <MediaQuery minWidth={1250}>
          <BannerCarousel bgImg={[ImageBgHeroExt, ImageBgAngelVaultsExt]} />
        </MediaQuery>
        <MediaQuery maxWidth={1249} minWidth={630}>
          <BannerCarousel bgImg={[ImageBgHero, ImageBgAngelVaults]} />
        </MediaQuery>
        <MediaQuery maxWidth={629}>
          <BannerCarousel bgImg={[ImageBgHeroMobile, ImageBgAngelVaultsMobile]} />
        </MediaQuery>
        
      </BannerWrapperOuter>        

    </>
  );
};

export default Banner;
