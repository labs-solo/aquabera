import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import { partners } from 'common/constants/constants';
import { StyledFlex, StyledInnerCard, StyledParagraph, StyledVerticalCard } from 'common/styles/common.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { StyledPartnersSection } from './partnersSection.style';

const PartnersSection: React.FC = () => {

  return (
    <StyledPartnersSection>
      <SectionHeader
        text="Partners"
      />
      {/* <StyledParagraph>General Partners</StyledParagraph> */}
      <StyledFlex justifyContent="space-between" flexWrap="wrap" className="mt-20">
        {partners.map((partner) => (
          <StyledVerticalCard key={partner.name} className="secondary-bg-color" padding="0">
            <OutboundLink href={partner.url} width="100%" height="100%" target="blank">
              <StyledInnerCard>
                <div className="img-wrapper">
                  <Image className={partner.logo} alt={partner.name} maxHeight="100px" maxWidth="200px" />
                </div>
                <StyledParagraph className="secondary-header-color mt-20" style={{textAlign: 'center'}}>{partner.name}</StyledParagraph>
                {/* <StyledSubText className="mt-20" style={{textAlign: 'center'}}>{partner.description}</StyledSubText> */}
              </StyledInnerCard> 
            </OutboundLink>
          </StyledVerticalCard>
        ))}
      </StyledFlex>
    </StyledPartnersSection>
  );
};

export default PartnersSection;
