import { ResetCSS } from 'common/assets/css/style';
import { darkTheme } from 'common/theme/dark/darkTheme';
import { lightTheme } from 'common/theme/light/lightTheme';
import SEO from 'components/seo';
import GlobalStyle, { ContentWrapper } from 'containers/app.style';
import Navbar from 'containers/Navbar';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const App: React.FC = (props) => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <SEO title="ICHI" />
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar toggleTheme={darkMode.toggle} />
        </Sticky>
        <ContentWrapper>
          {props.children}
        </ContentWrapper>
        {/* <Footer /> */}
      </ContentWrapper>
    </ThemeProvider>
  );
};
export default App;
