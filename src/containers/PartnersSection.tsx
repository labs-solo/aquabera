import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
// import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { StyledPartnersSection } from './partnersSection.style';

const PartnersSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        partnersSection {
          header {
            name
            text
          }
          partners {
            name
            text
          }
        }
      }
    }
  `);

  const section = Data.ichiJson.partnersSection;
  return (
    <StyledPartnersSection id="partners" className="partners-section">
      <Container>
        <SectionHeader
          text={section.header.name}
        />
        <SectionHeaderSubText
          text={section.header.text}
          className="mt-20 mlr-auto"
        />
        <StyledFlex justifyContent="center" flexWrap="wrap" className="mt-20" gap="70px">
          {section.partners?.map((partner) => (
            <StyledFlexColumn key={partner.name} className="one-token" justifyContent="space-between" width="320px" height="190px">
              <Image
                className={`icon-${partner.name}`}
                height="100px"
                width="100px"
                alt={partner.name}
              />
              <div className="one-token-name primary-text-color">
                {partner.name}
              </div>
              <div className="one-token-description primary-text-color">
                {partner.text}
              </div>
            </StyledFlexColumn>
          ))}
        </StyledFlex>
      </Container>
    </StyledPartnersSection>
  );
};

export default PartnersSection;
