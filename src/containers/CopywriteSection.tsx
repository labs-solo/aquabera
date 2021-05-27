import Image from 'common/components/Image';
// import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { StyledFlexCenter, StyledFlexColumn } from 'common/styles/common.styles';
import React from 'react';
import { CopywriteText } from './copywriteSection.style';

const CopywriteSection: React.FC = () => {
  return (
    <Container>
      <StyledFlexCenter>
        <StyledFlexColumn justifyContent="center" alignItems="center">
          <Image
            className="image-ichi"
            alt="Community"
            height="20px"
            width="24px"
          />
          <CopywriteText className="primary-text-color text-align-center mt-10 mb-40">2021 ICHI</CopywriteText>
        </StyledFlexColumn>
      </StyledFlexCenter>
    </Container>
  );
};

export default CopywriteSection;
