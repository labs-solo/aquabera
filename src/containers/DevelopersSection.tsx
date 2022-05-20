import Image from 'common/components/Image';
import { StyledFlex, StyledFlexColumn, StyledHorizontalCard, StyledHorizontalCardInner, StyledParagraph, StyledSecondaryParagraph } from 'common/styles/common.styles';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StyledDevelopersSection } from './developersSection.style';


const DevelopersSection: React.FC = () => {

  return (
    <StyledDevelopersSection>
      <SectionHeader 
        text='Developers' 
      />
      <div style={{position: 'relative'}}>
        <Image src="../images/developers-hero.png" alt="Developers" width="100%" />
        <StyledParagraph className="secondary-color ichi-protocol" >
          Learn about the ICHI Protocol through our documentation
        </StyledParagraph>
      </div>

      <StyledFlex flexWrap="wrap" justifyContent="space-between" className="mt-40">
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://github.com/ichidao" target="blank">
            <StyledHorizontalCardInner>
              <Image alt="Github" className="image-github mr-20" height="40" />
              <StyledSecondaryParagraph className="primary-text-color">
                Github
                <Image className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
              </StyledSecondaryParagraph>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://github.com/ichifarm/ichi-oneToken/blob/master/audits/quantstamp/audit.pdf" target="blank">
            <StyledHorizontalCardInner>
              <Image alt="Audits" className="ichi-black-white mr-20" height="40" />
              <StyledSecondaryParagraph className="primary-text-color">
                Audits
                <Image className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
              </StyledSecondaryParagraph>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
      </StyledFlex>

      <hr />

      <StyledFlex justifyContent="space-between" className="mt-60 bug_bounty">
        <StyledHorizontalCard style={{alignSelf: "flex-start"}} padding="0">
          <Image src="../images/bounty-man.png" alt="Bug Bounty Program" width="100%" />
        </StyledHorizontalCard>
        <StyledFlexColumn className="right_column">
          <SectionHeader 
            text='Bug Bounty Program' 
          />
          <StyledParagraph className="primary-text-color">
            ICHI prioritizes protocol security - we have partnered with both Immunefi and Hats.finance to ensure white-hat hackers help us keep our platform and community safe
          </StyledParagraph>
          <StyledHorizontalCard style={{marginTop: 30}} width="300px" className="secondary-bg-color">
            <OutboundLink href="https://immunefi.com/bounty/ichi/" target="blank">
              <StyledHorizontalCardInner>
                <StyledSecondaryParagraph className="primary-text-color">
                  Immunefi
                  <Image  className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
                </StyledSecondaryParagraph>
              </StyledHorizontalCardInner>
            </OutboundLink>
          </StyledHorizontalCard>
          <StyledHorizontalCard width="300px" className="secondary-bg-color">
            <OutboundLink href="https://app.hats.finance/vaults" target="blank">
              <StyledHorizontalCardInner>
                <StyledSecondaryParagraph className="primary-text-color">
                  Hats
                  <Image className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
                </StyledSecondaryParagraph>
              </StyledHorizontalCardInner>
            </OutboundLink>
          </StyledHorizontalCard>

        </StyledFlexColumn>
      </StyledFlex>

    </StyledDevelopersSection>
  );
};

export default DevelopersSection;
