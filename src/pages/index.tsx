import App from 'App';
import React from 'react';
import MainSection from 'containers/MainSection';

const Index: React.FC = (props) => {
  return (
    <App className="" noGutter={true}>
      <div id="hodlvaults" >
        <MainSection>
          {props.children}
        </MainSection>
      </div>
    </App>
  );
};
export default Index;
