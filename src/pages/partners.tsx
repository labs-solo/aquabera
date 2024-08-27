import App from 'App';
import PartnershipRequestSection from 'containers/PartnershipRequestSection';
import PartnersSection from 'containers/PartnersSection';
import React from 'react';


const Index: React.FC = () => {
  return (
    <App marginBottom={'0px'}  className="home-page-container">
      <PartnersSection />
      {/* <hr /> */}
      {/* <PartnershipRequestSection /> */}
    </App>
  );
};
export default Index;
