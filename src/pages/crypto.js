import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { cryptoTheme } from 'common/theme/crypto';
import SEO from 'components/seo';
import Banner from 'containers/Crypto/BannerSection';
import BannerSlider from 'containers/Crypto/BannerSlider';
import BetaSections from 'containers/Crypto/BetaSection';
import ControlSections from 'containers/Crypto/ControlSection';
import { ContentWrapper, GlobalStyle } from 'containers/Crypto/crypto.style';
import SlideSections from 'containers/Crypto/CryptoSlides';
import Footer from 'containers/Crypto/Footer';
import Navbar from 'containers/Crypto/Navbar';
import ScalableSections from 'containers/Crypto/ScalableSection';
import Transactions from 'containers/Crypto/Transaction';
import TrustedProofSections from 'containers/Crypto/TrustedProof';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <SEO title="Crypto | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BannerSlider />
          <Transactions />
          <ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections />
          <BetaSections />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default App;