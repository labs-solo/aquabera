import Image from 'common/components/Image';
import { StyledFlex, StyledFlexColumn, StyledHorizontalCard, StyledHorizontalCardInner, StyledParagraph, StyledSubText } from 'common/styles/common.styles';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StyledGovernanceSection } from './governanceSection.style';
import Phase from 'common/components/PhaseList/Phase';


const GovernanceSection: React.FC = () => {

  return (
    <StyledGovernanceSection>
      <SectionHeader 
        text='Governance' 
      />
      <StyledParagraph className="mt-20 mb-20 primary-text-color">
        The ICHI DAO is governed by the community of ICHI token stakers. Staked ICHI is represented by a separate token, called xICHI.
      </StyledParagraph>

      <StyledFlex className="mt-60 mb-60 mobile-column">
        <Image src="../images/xichi.svg" alt="xICHI" className="mr-40" height="150" />
        <StyledFlexColumn>
          <StyledParagraph className="secondary-header-color mt-20 mb-20">The xICHI Token</StyledParagraph>
          <StyledSubText className="secondary-text-color mb-20 " width="500px">
            The xICHI token enables community ownership and active stewardship of the Protocol. xICHI holders govern the Protocol through an on-chain governance process.
          </StyledSubText>
        </StyledFlexColumn>
      </StyledFlex>

      <StyledParagraph className="mt-20 mb-20 secondary-header-color">
        The Governance Apps
      </StyledParagraph>
      <StyledSubText className="secondary-text-color mb-20">
        The xICHI token enables community ownership and active stewardship of the Protocol. xICHI holders govern the Protocol through an on-chain governance process.
      </StyledSubText>
      <StyledFlex flexWrap="wrap" justifyContent="space-between" className="card_row">
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://app.ichi.org/" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/xichi.svg" alt="xICHI" className="mr-40" height="80" />
              <StyledFlexColumn>
                <StyledParagraph className="secondary-header-color">
                  Stake ICHI here
                  <Image  className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
                </StyledParagraph>
                <StyledSubText className="secondary-text-color">Get xICHI</StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
        <StyledHorizontalCard className="secondary-bg-color">
          <OutboundLink href="https://snapshot.org/#/ichi.eth" target="blank">
            <StyledHorizontalCardInner>
              <Image src="../images/governance.svg" alt="Governance Forum" className="mr-40" height="80" />
              <StyledFlexColumn>
                <StyledParagraph className="secondary-header-color">
                  Snapshot
                  <Image className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
                </StyledParagraph>
                <StyledSubText className="secondary-text-color">
                  A simple off-chain voting interface for community members to signal sentiment during the early stages of a proposal’s life cycle
                </StyledSubText>
              </StyledFlexColumn>
            </StyledHorizontalCardInner>
          </OutboundLink>
        </StyledHorizontalCard>
      </StyledFlex>

      <hr />

      <SectionHeader 
        text='THE PROPOSAL PROCESS' 
      />
      <StyledFlex justifyContent="space-between" className="mb-40 proposal_process">
        <Phase phaseNum={1} />
        <StyledSubText className="ml-40 secondary-text-color">
          <span className="primary-text-color">Ideate.</span> Bring up the idea in the “Proposals-Discussion” channel, tagging everyone for full awareness. This will enable community discussion and engagement. 
        </StyledSubText>
      </StyledFlex>
      <StyledFlex justifyContent="space-between" className="mb-40 proposal_process">
        <Phase phaseNum={2} />
        <StyledSubText className="ml-40 secondary-text-color">
          <span className="primary-text-color">Draft a proposal.</span> This proposal should include the following: idea, reasoning for proposal, how it will benefit the ICHI community, and possible risks. Share the detailed proposal with the community on the “Proposals-Discussion” channel.
        </StyledSubText>
      </StyledFlex>
      <StyledFlex justifyContent="space-between" className="mb-40 proposal_process">
        <Phase phaseNum={3} />
        <StyledSubText className="ml-40 secondary-text-color">
          <span className="primary-text-color">Submission.</span> Once approved on Discord, schedule a live stage meeting to review the proposal. Identify the default quorum, and set a timeline. 
        </StyledSubText>
      </StyledFlex>
      <StyledFlex justifyContent="space-between" className="mb-40 proposal_process">
        <Phase phaseNum={4} />
        <StyledSubText className="ml-40 secondary-text-color">
          <span className="primary-text-color">Voting.</span> Once approved, your proposal will be posted on ICHI's snapshot by one of the Core Team members. Snapshot: <a href="https://snapshot.org/#/ichi.eth">https://snapshot.org/#/ichi.eth</a>
        </StyledSubText>
      </StyledFlex>
    </StyledGovernanceSection>
  );
};

export default GovernanceSection;
