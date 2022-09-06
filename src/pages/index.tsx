import App from 'App';
import React from 'react';
import MainSection from 'containers/MainSection';
// import AngelVaultsSection from 'containers/AngelVaultsSection';
import BrandedDollarsSection from 'containers/BrandedDollarsSection';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Image from 'common/components/Image';

const Index: React.FC = (props) => {
  return (
    <App className="home-page-container" noGutter={true}>
      {/* <div id="angelvaults" >
        <AngelVaultsSection />
      </div>

      <div style={{textAlign: "center", width: "100%"}}>
        <AnchorLink to="/#hodlvaults" title="HODL Vaults">
          <Image className="chevron-down" alt="Scroll Down" />
        </AnchorLink>
      </div>
 */}
      <div id="hodlvaults" >
        <MainSection>
          {props.children}
        </MainSection>
      </div>

      <div style={{textAlign: "center", width: "100%"}}>
        <AnchorLink to="/#brandeddollars" title="Branded Dollars">
          <Image className="chevron-down" alt="Scroll Down" />
        </AnchorLink>
      </div>

      <div id="brandeddollars" >
        <BrandedDollarsSection />
      </div>

    </App>
  );
};
export default Index;
