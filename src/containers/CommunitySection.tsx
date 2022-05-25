import Image from 'common/components/Image';
import { StyledFlex, StyledFlexColumn, StyledHorizontalCard, StyledHorizontalCardInner, StyledParagraph, StyledSecondaryParagraph, StyledSubText } from 'common/styles/common.styles';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import { StyledCommunitySection } from './communitySection.style';
import { OutboundLink } from 'gatsby-plugin-google-gtag';


const CommunitySection: React.FC = () => {

  return (
    <StyledCommunitySection>
      <SectionHeader 
        text='Community' 
      />
      <StyledParagraph className="mt-20 mb-20 primary-text-color">
        ICHI is a Decentralized Autonomous Organization (DAO) that gives crypto projects the tools they need to operate their own sustainable, community-controlled economies.
      </StyledParagraph>

      <hr />

      <StyledSecondaryParagraph className="mt-20 mb-40 secondary-header-color">
        Join the Conversation
      </StyledSecondaryParagraph>
      <StyledFlex flexWrap="wrap" justifyContent="space-between">
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://discord.gg/cxPGjGTy8V" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/discord.svg" alt="Discord" className="mr-20" height="50" />
              <StyledFlexColumn>
                <StyledSecondaryParagraph className="secondary-header-color">Discord</StyledSecondaryParagraph>
                <StyledSubText className="secondary-text-color">Ask questions and engage with the ICHI community</StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://snapshot.org/#/ichi.eth" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/governance.svg" alt="Governance Forum" className="mr-20" height="50" />
              <StyledFlexColumn>
                <StyledSecondaryParagraph className="secondary-header-color">Governance Forum</StyledSecondaryParagraph>
                <StyledSubText className="secondary-text-color">Participate in ICHI governance</StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://t.me/ichifarm" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/telegram.svg" alt="Telegram" className="mr-20" height="50" />
              <StyledFlexColumn>
                <StyledSecondaryParagraph className="secondary-header-color">Telegram</StyledSecondaryParagraph>
                <StyledSubText className="secondary-text-color">Share ideas and contribute to wide-ranging discussions</StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://twitter.com/ichifoundation" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/twitter.svg" alt="Twitter" className="mr-20" height="50" />
              <StyledFlexColumn>
                <StyledSecondaryParagraph className="secondary-header-color">Twitter</StyledSecondaryParagraph>
                <StyledSubText className="secondary-text-color">Follow the latest news from ICHI</StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
      </StyledFlex>

      <hr />

      <SectionHeader 
        text="Coming Soon!" 
        className="primary-color font-italic"
      />
      <SectionHeader 
        text='Advocate Programs' 
      />
      <StyledParagraph className="mt-20 mb-20 primary-text-color">
        Love ICHI and want to do more? Apply to be an ICHI Ambassador! 
        You can become part of an elite team, expand your network, attend events with ICHI, 
        earn cash and develop your skill sets.
      </StyledParagraph>
    </StyledCommunitySection>
  );
};

export default CommunitySection;
