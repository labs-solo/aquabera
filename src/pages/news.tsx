import App from 'App';
import NewsSection from 'containers/NewsSection';
import React from 'react';


const Index: React.FC = () => {
  return (
    <App className="home-page-container">
      <NewsSection />
    </App>
  );
};
export default Index;
