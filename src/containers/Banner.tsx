// import CountDown from 'containers/CryptoModern/CountDown';
import Button from 'common/components/Button';
// import Image from 'common/components/Image';
import { StyledFlex, StyledFlexCenter, StyledFlexColumn, StyledFlexStart } from 'common/styles/common.styles';
import ModalContainer from 'containers/ModalContainer';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import useModal from 'hooks/useModal';
import React from 'react';
import BannerWrapperOuter, { BannerWrapper, StyledBackgroundGradient, StyledBackgroundImage } from './banner.style';
import { useQuery } from '@apollo/client';
import { ChainId, REFRESH_INTERVALS } from 'common/constants/constants';
import { QueryItemsResponse, QueryName } from 'common/models/graphql';
import { AppSyncFarmAPY } from 'common/models/farm';
import { listFarmsQuery } from 'graphql/queries/listFarms.query';
import numbro from 'numbro';

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
  const dataStatic = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "image/light/bg_angel_vaults.jpg" }) {
          childImageSharp {
            fixed(jpegQuality: 100, width: 1440, height: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  const imageData = dataStatic.file.childImageSharp.fixed;
  const { isShowing: isShowingModal, toggle: toggleModal } = useModal();
  const { loading: loadingFarms, error: errorLoadingFarms, data: dataFarms, networkStatus: networkStatusFarms, refetch: refetchFarms } = useQuery<QueryItemsResponse<AppSyncFarmAPY>>(listFarmsQuery, {
    // Fetch the list of farms if there is no urlPoolId
    fetchPolicy: 'cache-and-network',
    pollInterval: REFRESH_INTERVALS[QueryName.listFarms]
  });
  const appSyncFarms: AppSyncFarmAPY[] = dataFarms?.listFarms?.items || [];
  const farm = appSyncFarms.filter(farm => farm.isDeposit && farm.chainId === ChainId.MAINNET)
    .reduce( ( (prev, current) => (prev.farmTVL > current.farmTVL) ? prev : current), 
    {isDeposit: true, 
      yearlyAPY: 0,
      chainId: 0,
      tvl: 0,
      farmTVL: 0,
      lpName: ''});
  const maxAPY = parseInt(farm.yearlyAPY.toString());
  const bannerMessage = maxAPY ? `$${numbro(farm.farmTVL).format({ average: true, totalLength: 2 }).toUpperCase()} of ${farm.lpName} deposited, earning ${maxAPY}% APY`: ""; 

  return (
    <>
      <BannerWrapperOuter id="home">
        <StyledBackgroundGradient>
          <StyledFlexCenter>
            <OutboundLink href="https://app.ichi.org/deposit" target="_blank" className="medium color-white">
              {bannerMessage} &rarr;
            </OutboundLink>
          </StyledFlexCenter>
        </StyledBackgroundGradient>
        <BannerWrapper >
          {/* <BannerContent className="image-banner-bg"> */}
          <StyledBackgroundImage fixed={imageData}>
            <StyledFlex justifyContent="space-around" >
              {/* NOTE: This allows for a static image so the Flex container isn't reflowed */}
              {/* NOTE also the transition: none, otherwise a black blip happens */}
              <StaticImage
                src="../common/assets/image/light/img_angel_vaults.svg"
                alt="One Token Bubbles"
                placeholder="blurred"
                layout="fixed"
                quality={100}
                width={560}
                height={420}
                style={{
                  transition: 'none'
                }}
                className="ml-80"
              />
              <StyledFlexColumn justifyContent="center" className="color-white banner-header">
                <div className="heading">Angel Liquidity Vaults built for Crypto Communities and LPs</div>

                <div className="sub-heading mt-40">With Angel Vaults, Crypto Communities can build treasuries of project owned liquidity and provide LPs with single-sided deposits to Uniswap v3 without the need to manage their position.</div>

                <div className="btn-group">
                  <StyledFlexStart className="mt-40">
                    <Button className="text primary-button" title="Enter App" onClick={toggleModal} />
                    <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/where-to-get-ichi" className="ml-10">
                      <Button className="text secondary-button" title="Get ICHI" />
                    </OutboundLink>
                  </StyledFlexStart>
                </div>
              </StyledFlexColumn>
            </StyledFlex>
          </StyledBackgroundImage>
        </BannerWrapper>
      </BannerWrapperOuter>
      <ModalContainer
        key="Modal"
        isShowing={isShowingModal}
        toggle={() => toggleModal()}
      />
    </>
  );
};

export default Banner;
