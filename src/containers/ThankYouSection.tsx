import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import { StyledFlex, StyledFlexColumn, StyledHorizontalCard, StyledParagraph } from 'common/styles/common.styles';
import React from 'react';
import { StyledThankYouSection } from './thankYouSection.style';

const ThankYouSection: React.FC = () => {

  return (
    <StyledThankYouSection>
      <StyledFlex justifyContent="space-between" className="mt-60 left-image">
        <StyledHorizontalCard style={{alignSelf: "flex-start"}} padding="0">
          <Image src="../images/thank-you.png" alt="Thank you!" width="100%" />
        </StyledHorizontalCard>
        <StyledFlexColumn className="right_column">
          <SectionHeader
            text="Thank you!"
          />
          <StyledParagraph>Thank you for your request. We will contact you soon.</StyledParagraph>
        </StyledFlexColumn>
      </StyledFlex>
    </StyledThankYouSection>
  );
};

export default ThankYouSection;
