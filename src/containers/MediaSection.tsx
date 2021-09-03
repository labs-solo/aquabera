import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Container from 'common/components/UI/Container';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import { StyledMediaSection } from './mediaSection.style';

const CopywriteSection: React.FC = () => {
  return (
    <Container width="1500px">
      <StyledMediaSection>
        <SectionHeader 
          text='Media Coverage' 
        />
        <StyledFlex width="100%" padding="40px 0 60px 0" justifyContent="space-evenly" flexWrap="wrap"  className="media-section-bg-color">
          <StyledFlexColumn>
            <Link target="blank" href="https://cointelegraph.com/news/ichi-launches-decentralized-monetary-authority-for-stablecoin-issuance">
              <Image
                className="image-cointelegraph"
                alt="CoinTelegraph"
              />
            </Link>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <Link target="blank" href="https://newsletter.thedefiant.io/p/-inbox-dump-11?token=eyJ1c2VyX2lkIjozODk5OTU2NiwicG9zdF9pZCI6MzcyNDc4NjcsIl8iOiJjZVFzYSIsImlhdCI6MTYyMzA3NzIyNSwiZXhwIjoxNjIzMDgwODI1LCJpc3MiOiJwdWItMTEyNTkiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.Kx3M4plvXcJ1LtYAcmR0upWj9MxMReTSxMTMqdDLZeM">
              <Image
                className="image-defiant"
                alt="The Defiant"
              />
            </Link>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <Link target="blank" href="https://www.youtube.com/watch?v=dtyrsnqJHMA">
            <Image
              className="image-defiyield"
              alt="Defiyield"
            />
            </Link>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <Link target="blank" href="https://decrypt.co/74538/filecoins-stablecoin-onefil-launches">
              <Image
                className="image-decrypt"
                alt="Decrypt"
              />
            </Link>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <Link target="blank" href="https://www.cointribune.com/en/blockchain-en/ecosystem/1inch-network-to-launch-its-own-stablecoin/">
              <Image
                className="image-cointribune"
                alt="CoinTribune"
              />
            </Link>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <Link target="blank" href="https://podcasts.apple.com/us/podcast/inside-track-with-bryan-gross-from-ichi/id1557938964?i=1000532027111">
              <Image
                className="image-insidetrack"
                alt="Inside Track"
              />
            </Link>
          </StyledFlexColumn>
        </StyledFlex>
      </StyledMediaSection>
    </Container>
  );
};

export default CopywriteSection;
