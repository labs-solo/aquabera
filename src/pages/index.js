import { ResetCSS } from 'common/assets/css/style';
import { theme } from 'common/theme/cryptoModern';
import SEO from 'components/seo';
import Banner from 'containers/CryptoModern/Banner';
import GlobalStyle, {
  ContentWrapper, CryptoWrapper
} from 'containers/CryptoModern/cryptoModern.style';
import Features from 'containers/CryptoModern/FeatureSection';
import Footer from 'containers/CryptoModern/Footer';
import MarketOpportunity from 'containers/CryptoModern/MarketOpportunitySection';
import Navbar from 'containers/CryptoModern/Navbar';
// import Newsletter from 'containers/CryptoModern/Newsletter';
// import Privacypolicy from 'containers/CryptoModern/Privacy';
// import WalletSection from 'containers/CryptoModern/WalletSection';
// import WorkHistory from 'containers/CryptoModern/WorkHistory';
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
            {/* <CountDown /> */}
            <Features />
            <MarketOpportunity />
            {/* <WorkHistory /> */}
            {/* <Investment /> */}
            {/* <FundRaising /> */}
            {/* <Privacypolicy /> */}
            {/* <WalletSection /> */}
            {/* <MapSection /> */}
            {/* <FaqSection /> */}
            {/* <Newsletter /> */}
          </ContentWrapper>
          <Footer />
        </CryptoWrapper>
      </>
    </ThemeProvider>
  );
}

// Original that allowed selecting the different templates
// import React, { Fragment } from 'react';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';
// import { Modal } from '@redq/reuse-modal';
// import { agencyTheme } from 'common/theme/agency';
// import { ResetCSS } from 'common/assets/css/style';
// import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
// import Navbar from 'containers/Agency/Navbar';
// import BannerSection from 'containers/Agency/BannerSection';
// import FeatureSection from 'containers/Agency/FeatureSection';
// import AboutUsSection from 'containers/Agency/AboutUsSection';
// import WorkHistory from 'containers/Agency/WorkHistory';
// import BlogSection from 'containers/Agency/BlogSection';
// import TestimonialSection from 'containers/Agency/TestimonialSection';
// import TeamSection from 'containers/Agency/TeamSection';
// import VideoSection from 'containers/Agency/VideoSection';
// import FaqSection from 'containers/Agency/FaqSection';
// import NewsletterSection from 'containers/Agency/NewsletterSection';
// import QualitySection from 'containers/Agency/QualitySection';
// import Footer from 'containers/Agency/Footer';
// import { DrawerProvider } from 'common/contexts/DrawerContext';
// import '@redq/reuse-modal/es/index.css';
// import SEO from 'components/seo';

// export default () => {
//   return (
//     <ThemeProvider theme={agencyTheme}>
//       <Fragment>
//         <SEO title="Agency" />
//         <Modal />
//         <ResetCSS />
//         <GlobalStyle />
//         {/* End of agency head section */}
//         {/* Start agency wrapper section */}
//         <AgencyWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
//             <DrawerProvider>
//               <Navbar />
//             </DrawerProvider>
//           </Sticky>
//           <BannerSection />
//           <FeatureSection />
//           <AboutUsSection />
//           <WorkHistory />
//           <BlogSection />
//           <QualitySection />
//           <VideoSection />
//           <TestimonialSection />
//           <TeamSection />
//           <FaqSection />
//           <NewsletterSection />
//           <Footer />
//         </AgencyWrapper>
//         {/* End of agency wrapper section */}
//       </Fragment>
//     </ThemeProvider>
//   );
// };
