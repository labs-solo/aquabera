import App from 'App';
import Banner from 'containers/Banner';
import CopywriteSection from 'containers/CopywriteSection';
import MediaSection from 'containers/MediaSection';
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
      <HowItWorksSection />
      <PartnersSection />
      <RssFeedSection />
      <JoinTheCommunitySection />
      <MediaSection />
      <CopywriteSection />
    </App>
  );
};
export default Index;
