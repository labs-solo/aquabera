import App from 'App';
import PartnershipRequestSection from 'containers/PartnershipRequestSection';
import PartnersSection from 'containers/PartnersSection';
import React from 'react';


const Index: React.FC = () => {
  return (
    <App noGutter={true} marginBottom={'0px'}>
      <PartnersSection />
      <hr />
      <PartnershipRequestSection />
    </App>
  );
};
export default Index;
