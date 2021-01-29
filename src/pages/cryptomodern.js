import { ResetCSS } from 'common/assets/css/style';
import { theme } from 'common/theme/cryptoModern';
import SEO from 'components/seo';
import Banner from 'containers/CryptoModern/Banner';
import CountDown from 'containers/CryptoModern/CountDown';
import GlobalStyle, {
  ContentWrapper, CryptoWrapper
} from 'containers/CryptoModern/cryptoModern.style';
import FaqSection from 'containers/CryptoModern/FaqSection';
import Features from 'containers/CryptoModern/FeatureSection';
import Footer from 'containers/CryptoModern/Footer';
import FundRaising from 'containers/CryptoModern/FundRaising';
import Investment from 'containers/CryptoModern/Investment';
import MapSection from 'containers/CryptoModern/MapSection';
import Navbar from 'containers/CryptoModern/Navbar';
import Newsletter from 'containers/CryptoModern/Newsletter';
import Privacypolicy from 'containers/CryptoModern/Privacy';
import WalletSection from 'containers/CryptoModern/WalletSection';
import WorkHistory from 'containers/CryptoModern/WorkHistory';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Ichi" />

        <ResetCSS />
        <GlobalStyle />

        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <CountDown />
            <Features />
            <WorkHistory />
            <Investment />
            <FundRaising />
            <Privacypolicy />
            <WalletSection />
            <MapSection />
            <FaqSection />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </CryptoWrapper>
      </>
    </ThemeProvider>
  );
}
