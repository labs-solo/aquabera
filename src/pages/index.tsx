import { ResetCSS } from 'common/assets/css/style';
import { theme } from 'common/theme/hostingModern';
import SEO from 'components/seo';
import Banner from 'containers/CryptoModern/Banner';
import GlobalStyle, {
  ContentWrapper, CryptoWrapper
} from 'containers/CryptoModern/cryptoModern.style';
// import CallToAction from 'containers/HostingModern/CallToAction';
// import CustomerSupport from 'containers/HostingModern/CustomerSupport';
// import Faq from 'containers/HostingModern/Faq';
// import Feature from 'containers/HostingModern/Feature';
// import Footer from 'containers/HostingModern/Footer';
import Footer from 'containers/CryptoModern/Footer';
import HowDoesItWorkSection from 'containers/CryptoModern/HowDoesItWorkSection';
// import Features from 'containers/CryptoModern/FeatureSection';
// import MarketOpportunity from 'containers/CryptoModern/MarketOpportunitySection';
import Navbar from 'containers/CryptoModern/Navbar';
// import NewsFeed from 'containers/HostingModern/NewsFeed';
// import Pricing from 'containers/HostingModern/Pricing';
// import Service from 'containers/HostingModern/Service';
// import Testimonials from 'containers/HostingModern/Testimonials';
// import UltimateFeature from 'containers/HostingModern/UltimateFeature';
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
          {/* <Service /> */}
          {/* <Feature /> */}
          {/* <UltimateFeature /> */}
          {/* <CustomerSupport /> */}
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
          {/* <NewsFeed /> */}
          {/* <Faq /> */}
          {/* <CallToAction /> */}
          {/* <Features /> */}
          {/* <MarketOpportunity /> */}
          <HowDoesItWorkSection />
        </ContentWrapper>
        <Footer />
      </CryptoWrapper>
    </ThemeProvider>
  );
};
export default App;


// Crypto modern
// import { ResetCSS } from 'common/assets/css/style';
// import { theme } from 'common/theme/cryptoModern';
// import SEO from 'components/seo';
// import Banner from 'containers/CryptoModern/Banner';
// import CountDown from 'containers/CryptoModern/CountDown';
// import GlobalStyle, {
//   ContentWrapper, CryptoWrapper
// } from 'containers/CryptoModern/cryptoModern.style';
// import Features from 'containers/CryptoModern/FeatureSection';
// import Footer from 'containers/CryptoModern/Footer';
// import MarketOpportunity from 'containers/CryptoModern/MarketOpportunitySection';
// import Navbar from 'containers/CryptoModern/Navbar';
// // import Newsletter from 'containers/CryptoModern/Newsletter';
// // import Privacypolicy from 'containers/CryptoModern/Privacy';
// // import WalletSection from 'containers/CryptoModern/WalletSection';
// // import WorkHistory from 'containers/CryptoModern/WorkHistory';
// import React from 'react';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';


// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <>
//         <SEO title="Ichi" />

//         <ResetCSS />
//         <GlobalStyle />

//         <CryptoWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-active">
//             <Navbar />
//           </Sticky>
//           <ContentWrapper>
//             <Banner />
//             <CountDown />
//             <Features />
//             <MarketOpportunity />
//             {/* <WorkHistory /> */}
//             {/* <Investment /> */}
//             {/* <FundRaising /> */}
//             {/* <Privacypolicy /> */}
//             {/* <WalletSection /> */}
//             {/* <MapSection /> */}
//             {/* <FaqSection /> */}
//             {/* <Newsletter /> */}
//           </ContentWrapper>
//           <Footer />
//         </CryptoWrapper>
//       </>
//     </ThemeProvider>
//   );
// }
