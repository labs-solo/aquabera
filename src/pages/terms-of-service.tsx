import App from 'App';
import React from 'react';
import  TermsOfServiceContainer from 'containers/TermsOfServiceContainer';
import CopywriteSection from 'containers/CopywriteSection';

const Index: React.FC = () => {
  return (
    <App>
      <TermsOfServiceContainer />
      <CopywriteSection />
    </App>
  );
};
export default Index;
