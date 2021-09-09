import App from 'App';
import Banner from 'containers/Banner';
import MediaSection from 'containers/MediaSection';
import QuoteCarouselSection from 'containers/QuoteCarouselSection';
import HowItWorksSection from 'containers/HowItWorksSection';
import JoinTheCommunitySection from 'containers/JoinTheCommunitySection';
import OneTokensSection from 'containers/OneTokensSection';
import PartnersSection from 'containers/PartnersSection';
import RssFeedSection from 'containers/RssFeedSection';
import React from 'react';

const Index: React.FC = () => {
  return (
    <App>
      <Banner />
      <OneTokensSection />
      <QuoteCarouselSection />
      <HowItWorksSection />
      <PartnersSection />
      <RssFeedSection />
      <JoinTheCommunitySection />
      <MediaSection />
    </App>
  );
};
export default Index;
