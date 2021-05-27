import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
// import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexAlignCenter, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';
import { StyledHowItWorksSection, StyledNumber, StyledStepText } from './howItWorksSection.style';

const HowItWorksSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        howItWorksSection {
          href
          header {
            name
            text
          }
        }
      }
    }
  `);

  const howItWorksSection = Data.ichiJson.howItWorksSection;
  return (
    <StyledHowItWorksSection id="how-it-works" className="how-it-works">
      <Container>
        <StyledFlex className="how-it-works-contents">
          <Image
            className="image-how-it-works"
            alt="How it works"
          />

          <StyledFlexColumn alignItems="flex-start" className="mt-40 ml-20">
            <SectionHeader
              text={howItWorksSection.header.name}
            />
            <SectionHeaderSubText
              text={howItWorksSection.header.text}
              className="mt-20 text-align-left"
            />

            <StyledFlexColumn className="mt-20">
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">1</StyledNumber>
                <StyledStepText className="primary-text-color">You pay exactly $1 of value in two parts to mint any oneToken (an ICHI stablecoin).</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">2</StyledNumber>
                <StyledStepText className="primary-text-color">oneBTC is used in this example.  It is worth 1 USD.  It is minted with <span>USDC</span> and <span>wBTC</span></StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">3</StyledNumber>
                <StyledStepText className="primary-text-color">The <span>wBTC</span> share increases as the BTC treasury grows in size.</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">4</StyledNumber>
                <StyledStepText className="primary-text-color">The USDC is deposited to the oneBTC Vault, controlled by the oneBTC smart contract.</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">5</StyledNumber>
                <StyledStepText className="primary-text-color">The wBTC is also deposited to the oneBTC Vault, governed by oneBTC holders.</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">6</StyledNumber>
                <StyledStepText className="primary-text-color">Exchange wBTC for more USDC. (Rebalance)</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">7</StyledNumber>
                <StyledStepText className="primary-text-color">Invest wBTC in DeFi (Decentralized Finance).</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">8</StyledNumber>
                <StyledStepText className="primary-text-color">Spend wBTC on discounts and yield to grow adoption.</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">9</StyledNumber>
                <StyledStepText className="primary-text-color">Minting and Redemption Fees stay in Collateral.</StyledStepText>
              </StyledFlexAlignCenter>
              <StyledFlexAlignCenter className="mt-10">
                <StyledNumber className="primary-color">10</StyledNumber>
                <StyledStepText className="primary-text-color">You get exactly $1 of USDC when you redeem a oneBTC.</StyledStepText>
              </StyledFlexAlignCenter>
            </StyledFlexColumn>
            <OutboundLink target="_blank" href={howItWorksSection.href} className="mt-20">
              <Button className="text primary-button button-learn-more" title="Learn More" />
            </OutboundLink>
          </StyledFlexColumn>
        </StyledFlex>
      </Container>
    </StyledHowItWorksSection>
  );
};

export default HowItWorksSection;
