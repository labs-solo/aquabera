import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Container from 'common/components/UI/Container';
import { StyledFlex } from 'common/styles/common.styles';
import React from 'react';
import { CopywriteText, TosText } from './copywriteSection.style';

const CopywriteSection: React.FC = () => {
  return (
    <Container >
      <StyledFlex width="100%" padding="0 0 40px 0">
        <CopywriteText className="primary-text-color text-align-left">
            &copy; 2021 
        </CopywriteText>
        <Image
          className="image-ichi-logo"
          alt="Community"
          height="20px"
          width="auto"
        />
        <TosText className="primary-text-color text-align-right">
          <Link href="/terms-of-service/">Terms of Service</Link>
        </TosText>
      </StyledFlex>
    </Container>
  );
};

export default CopywriteSection;
