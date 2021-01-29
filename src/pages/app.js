import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { appTheme } from 'common/theme/app';
import SEO from 'components/seo';
import {
  AppWrapper,
  ConditionWrapper, GlobalStyle
} from 'containers/App/app.style';
import DomainSection from 'containers/App/Banner';
import ControllSection from 'containers/App/Control';
import FeatureSection from 'containers/App/FeatureSection';
import FeatureSlider from 'containers/App/FeatureSlider';
import FeatureSliderTwo from 'containers/App/FeatureSliderTwo';
import Footer from 'containers/App/Footer';
import Navbar from 'containers/App/Navbar';
import PartnerHistory from 'containers/App/PartnerHistory';
import PaymentSection from 'containers/App/PaymentSection';
import TestimonialSection from 'containers/App/Testimonial';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

function getSize() {
  if (typeof window !== "undefined") {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  } 
  return {
    innerHeight: 0,
    innerWidth: 0,
    outerHeight: 0,
    outerWidth: 0,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const App = () => {
  const size = useWindowSize();
  const innerWidth = size.innerWidth;

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="App | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <ConditionWrapper id="keyfeature">
            {innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;