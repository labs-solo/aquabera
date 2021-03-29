import { ResetCSS } from 'common/assets/css/style';
import { theme } from 'common/theme/hostingModern';
import SEO from 'components/seo';
import Banner from 'containers/CryptoModern/Banner';
import GlobalStyle, {
  ContentWrapper, CryptoWrapper
} from 'containers/CryptoModern/cryptoModern.style';
import Footer from 'containers/CryptoModern/Footer';
import HowDoesItWorkSection from 'containers/CryptoModern/HowDoesItWorkSection';
import Navbar from 'containers/CryptoModern/Navbar';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Ichi" />

      <ResetCSS />
      <GlobalStyle />

      <CryptoWrapper>
        {/* <TopBar /> */}
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <ContentWrapper>
          <Banner />
          <HowDoesItWorkSection />
        </ContentWrapper>
        <Footer />
      </CryptoWrapper>
    </ThemeProvider>
  );
};
export default App;
