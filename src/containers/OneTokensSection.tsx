import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
// import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { StyledOneTokensSection } from './oneTokensSection.style';
import {oneTokens} from 'common/data/ichi'


const OneTokensSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        oneTokensSection {
          header {
            name
            text
          }
          oneTokens {
            name
            text
          }
        }
      }
    }
  `);

  // const oneTokens = Data.ichiJson.oneTokensSection.oneTokens || [];
  return (
    <StyledOneTokensSection id="one-tokens">
      <Container>
        <SectionHeader
          text={Data.ichiJson.oneTokensSection.header.name}
        />
        <SectionHeaderSubText
          text={Data.ichiJson.oneTokensSection.header.text}
          className="mt-20 mlr-auto"
        />
        <Fade in delay={100}>
          <StyledFlex justifyContent="center" className="mt-20 one-tokens-content" gap="25px" flexWrap="wrap">
            {oneTokens?.map((oneToken) => (
              <StyledFlexColumn key={oneToken.name} className="one-token" justifyContent="space-between">
                <Image
                  src={`oneTokens/logo_256_${oneToken.name}.svg?2`}
                  height="100px"
                  width="100px"
                  alt={`${oneToken.name} logo`}
                />
                <div className="one-token-name primary-text-color">
                  {oneToken.name}
                </div>
                <div className="one-token-description primary-text-color">
                  {oneToken.text}
                </div>
              </StyledFlexColumn>
            ))}
          </StyledFlex>
        </Fade>
      </Container>
    </StyledOneTokensSection>
  );
};

export default OneTokensSection;
