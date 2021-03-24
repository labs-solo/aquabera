import Box from 'common/components/Box';
import Image from 'common/components/Image';
// import FeatureBlock from 'common/components/FeatureBlock';
// import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import colors from 'common/theme/hostingModern/colors';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { HowDoesItWorkSectionWrapper, USDCWrapper, WBTCWrapper } from './howDoesItWorkSection.style';

const HowDoesItWorkSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        HowDoesItWork {
          href
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <HowDoesItWorkSectionWrapper id="how-it-works">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="How it works" {...sectionSubTitle} />
        </Box>
        <div className="how-it-works-contents">
          <Fade in delay={100}>
            <a target="_blank" rel="noreferrer" href={Data.cryptoModernJson.HowDoesItWork.href}>
              <Image src={Data.cryptoModernJson.HowDoesItWork.logo.publicURL} alt="Banner" maxWidth="900px" />
            </a>
            <div className="steps-container">
              <div className="steps">
                <div className="step"><span className="number-circle">1</span> You pay exactly $1 of value in two parts to mint any oneToken (an ICHI stablecoin).</div> 
                <div className="step"><span className="number-circle">2</span> oneBTC is used in this example.  It is work 1 USD.  It is minted with <USDCWrapper>USDC</USDCWrapper> and <WBTCWrapper>wBTC</WBTCWrapper></div> 
                <div className="step"><span className="number-circle">3</span> The <WBTCWrapper>wBTC</WBTCWrapper> share increases as the BTC treasure grows in size.</div>
                <div className="step"><span className="number-circle">4</span> The USDC is deposited to the oneBTC contract, controlled by the oneBTC smart contract.</div>
                <div className="step"><span className="number-circle">5</span> The wBTC is also deposited to the oneBTC contract, governed by oneBTC holders.</div>
              </div>
              <div className="steps">
                <div className="step"><span className="number-circle">6</span> Exchange wBTC for more USDC. (Rebalance)</div>
                <div className="step"><span className="number-circle">7</span> Invest wBTC in DeFi (Decentralized Finance).</div>
                <div className="step"><span className="number-circle">8</span> Spend wBTC on discounts and yield to grow adoption.</div>
                <div className="step"><span className="number-circle">9</span> Minting and Redemption Fees Stay in Collateral.</div>
                <div className="step"><span className="number-circle">10</span> You get exactly $1 of USDC when you redeem a oneBTC.</div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </HowDoesItWorkSectionWrapper>
  );
};

// FeatureSection style props
HowDoesItWorkSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
HowDoesItWorkSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
    display: 'flex',
    width: '100%',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: colors.heading,
    mb: '15px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['14px', '16px'],
    fontWeight: '400',
    color: '#496b96',
    mb: '0',
    maxWidth: '420px',
    lineHeight: '1.5',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(142, 199, 255, 0.502)',
  },
};

export default HowDoesItWorkSection;
