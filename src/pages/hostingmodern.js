import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/hostingModern';
import SEO from 'components/seo';
import Banner from 'containers/HostingModern/Banner';
import CallToAction from 'containers/HostingModern/CallToAction';
import CustomerSupport from 'containers/HostingModern/CustomerSupport';
import Faq from 'containers/HostingModern/Faq';
import Feature from 'containers/HostingModern/Feature';
import Footer from 'containers/HostingModern/Footer';
import {
  ContentWrapper, GlobalStyle
} from 'containers/HostingModern/hostingModern.style';
import Navbar from 'containers/HostingModern/Navbar';
import NewsFeed from 'containers/HostingModern/NewsFeed';
import Pricing from 'containers/HostingModern/Pricing';
import Service from 'containers/HostingModern/Service';
import Testimonials from 'containers/HostingModern/Testimonials';
import TopBar from 'containers/HostingModern/TopBar';
import UltimateFeature from 'containers/HostingModern/UltimateFeature';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Hosting Modern | A react next landing page" />

      <ResetCSS />
      <GlobalStyle />

      <ContentWrapper>
        <TopBar />
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <Banner />
        <Service />
        <Feature />
        <UltimateFeature />
        <CustomerSupport />
        <Pricing />
        <Testimonials />
        <NewsFeed />
        <Faq />
        <CallToAction />
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};
