import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'graphql/client';
import { ResetCSS } from 'common/assets/css/style';
import 'index.css';
import { darkTheme } from 'common/theme/dark/darkTheme';
import { lightTheme } from 'common/theme/light/lightTheme';
import SEO from 'components/seo';
import GlobalStyle, { ContentWrapper } from 'containers/app.style';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Banner from 'containers/Banner';
import Container from 'common/components/UI/Container';
import Footer from 'containers/Footer';
import HeaderSection from 'containers/HeaderSection';
import 'react-pro-sidebar/dist/css/styles.css';
import SidebarSection from 'containers/SidebarSection';
import useDarkMode from 'use-dark-mode';

type Props = {
  className?: string;
  noGutter?: boolean;
  marginBottom?: string;
}


const App: React.FC<Props> = (props) => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;

  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarClassName = showSidebar ? 'show' : '';
  
  return (
    <ThemeProvider theme={lightTheme}>
      <ApolloProvider client={apolloClient}>
        <SEO title="AquaBera" />
        <ResetCSS />
        <GlobalStyle />
        <div style={{position: 'relative'}}>
          <SidebarSection sidebarClassName={sidebarClassName} showSidebar={setShowSidebar} />
          <ContentWrapper className={`main-container ${props.className}`}>
            <HeaderSection showSidebar={setShowSidebar}  themeToggle={darkMode.toggle} themeName={theme.name} /> 
            <Container noGutter={props.noGutter} marginBottom="20px">
              {props.children}
            </Container>
            <Footer />
          </ContentWrapper>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
};
export default App;
