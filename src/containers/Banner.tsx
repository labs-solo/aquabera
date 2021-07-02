// import CountDown from 'containers/CryptoModern/CountDown';
import Button from 'common/components/Button';
// import Image from 'common/components/Image';
import { StyledFlexCenter, StyledFlexColumn, StyledFlexStart } from 'common/styles/common.styles';
import ModalContainer from 'containers/ModalContainer';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import useModal from 'hooks/useModal';
import React from 'react';
import BannerWrapperOuter, { BannerWrapper, StyledBackgroundGradient, StyledBackgroundImage } from './banner.style';

type Props = {
  refetchUserInfo: Function;
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
  const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "image/light/bg_hero.jpg" }) {
          childImageSharp {
            fixed(jpegQuality: 100, width: 1440, height: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  const imageData = data.file.childImageSharp.fixed;
  const { isShowing: isShowingModal, toggle: toggleModal } = useModal();

  return (
    <>
      <BannerWrapperOuter id="home">
        <StyledBackgroundGradient>
          <StyledFlexCenter>
            <OutboundLink href="https://docs.ichi.farm/" target="_blank" className="medium color-white">
              Read the Docs to learn about ICHI V2 &rarr;
            </OutboundLink>
          </StyledFlexCenter>
        </StyledBackgroundGradient>
        <BannerWrapper >
          {/* <BannerContent className="image-banner-bg"> */}
          <StyledBackgroundImage fixed={imageData}>
            <StyledFlexCenter>
              {/* NOTE: This allows for a static image so the Flex container isn't reflowed */}
              {/* NOTE also the transition: none, otherwise a black blip happens */}
              <StaticImage
                src="../common/assets/image/light/img_bubbles_onetokens.svg"
                alt="One Token Bubbles"
                placeholder="blurred"
                layout="fixed"
                quality={100}
                width={665}
                height={700}
                style={{
                  transition: 'none'
                }}
              />
              <StyledFlexColumn justifyContent="center" className="color-white banner-header ml-10">
                <div className="heading">Stablecoins for any</div>
                <div className="heading">cryptocurrency</div>

                <div className="sub-heading mt-40">Mint tokens, earn yield, and</div>
                <div className="sub-heading">incentivize activity with the world's first</div>
                <div className="sub-heading">Decentralized Monetary Authority</div>

                <StyledFlexStart className="mt-40">
                <Button className="text primary-button" title="Enter App" onClick={toggleModal} />
                  <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/where-to-get-ichi" className="ml-10">
                    <Button className="text secondary-button" title="Get ICHI" />
                  </OutboundLink>
                </StyledFlexStart>
              </StyledFlexColumn>
            </StyledFlexCenter>
          </StyledBackgroundImage>
        </BannerWrapper>
      </BannerWrapperOuter>
      <ModalContainer
        key="Modal"
        isShowing={isShowingModal}
        toggle={() => toggleModal()}
        refetchUserInfo={props.refetchUserInfo}
      />
    </>
  );
};

export default Banner;
