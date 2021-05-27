import { ResetCSS } from 'common/assets/css/style';
import { darkTheme } from 'common/theme/dark/darkTheme';
import { lightTheme } from 'common/theme/light/lightTheme';
import SEO from 'components/seo';
import GlobalStyle, { ContentWrapper } from 'containers/app.style';
import Banner from 'containers/Banner';
import CopywriteSection from 'containers/CopywriteSection';
import HowItWorksSection from 'containers/HowItWorksSection';
import JoinTheCommunitySection from 'containers/JoinTheCommunitySection';
import Navbar from 'containers/Navbar';
import OneTokensSection from 'containers/OneTokensSection';
import PartnersSection from 'containers/PartnersSection';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const App = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Ichi" />
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar toggleTheme={darkMode.toggle} />
        </Sticky>
        <ContentWrapper>
          <Banner />
          <OneTokensSection />
          <HowItWorksSection />
          <PartnersSection />
          <JoinTheCommunitySection />
          <CopywriteSection />
        </ContentWrapper>
        {/* <Footer /> */}
      </ContentWrapper>
    </ThemeProvider>
  );
};
export default App;
