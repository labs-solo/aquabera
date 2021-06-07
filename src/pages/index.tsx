import App from 'App';
import Banner from 'containers/Banner';
import CopywriteSection from 'containers/CopywriteSection';
import HowItWorksSection from 'containers/HowItWorksSection';
import JoinTheCommunitySection from 'containers/JoinTheCommunitySection';
import OneTokensSection from 'containers/OneTokensSection';
import PartnersSection from 'containers/PartnersSection';
import React from 'react';

const Index: React.FC = () => {
  return (
    <App>
      <Banner />
      <OneTokensSection />
      <HowItWorksSection />
      <PartnersSection />
      <JoinTheCommunitySection />
      <CopywriteSection />
    </App>
  );
};
export default Index;
