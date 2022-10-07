import Image from 'common/components/Image';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import Phase from 'common/components/PhaseList/Phase';
import HorizontalCard from 'common/components/HorizontalCard';


const GovernanceSection: React.FC = () => {

  return (
    <section>
      <SectionHeader 
        text='Governance' 
      />
      <div className="mt-4 mb-4 primary-text-color font-primary max-w-[800px]">
        The ICHI DAO is governed by the community of ICHI token stakers. Staked ICHI is represented by a separate token, called xICHI.
      </div>

      <div className="flex mt-14 mb-14 mobile-column">
        <Image src="../images/xichi.svg" alt="xICHI" marginRight="40px" height="150" />
        <div className="flex flex-col">
          <div className="font-primary secondary-header-color mt-5 mb-5">The xICHI Token</div>
          <div className="secondary-text-color mb-5 font-secondary">
            The xICHI token enables community ownership and active stewardship of the Protocol. xICHI holders govern the Protocol through an on-chain governance process.
          </div>
        </div>
      </div>

      <div className="font-primary mt-4 mb-4 secondary-header-color">
        The Governance Apps
      </div>
      <div className="secondary-text-color mb-5 font-secondary">
        The xICHI token enables community ownership and active stewardship of the Protocol. xICHI holders govern the Protocol through an on-chain governance process.
      </div>
      <div className="flex flex-wrap justify-between card_row">
      <HorizontalCard 
          title="Stake ICHI here"
          url="https://app.ichi.org/"
          urlIcon={true}
          imageSrc="../images/xichi.svg" 
          imageMargin="40px" 
          imageHeight="80px"
          description="Get xICHI"
        />
        <HorizontalCard 
          title="Snapshot"
          url="https://snapshot.org/#/ichi.eth"
          urlIcon={true}
          imageSrc="../images/governance.svg" 
          imageMargin="40px" 
          imageHeight="80px"
          description="A simple off-chain voting interface for community members to signal sentiment during the early stages of a proposal’s life cycle"
        />
      </div>

      <hr />

      <SectionHeader 
        text='THE PROPOSAL PROCESS' 
      />
      <div className="flex flex-col justify-start mb-10 md:flex-row">
        <Phase phaseNum={1} />
        <div className="font-secondary pl-10 secondary-text-color">
          <span className="primary-text-color">Ideate.</span> Bring up the idea in the “Proposals-Discussion” channel, tagging everyone for full awareness. This will enable community discussion and engagement. 
        </div>
      </div>
      <div className="flex flex-col justify-start mb-10 md:flex-row">
        <Phase phaseNum={2} />
        <div className="font-secondary ml-10 secondary-text-color">
          <span className="primary-text-color">Draft a proposal.</span> This proposal should include the following: idea, reasoning for proposal, how it will benefit the ICHI community, and possible risks. Share the detailed proposal with the community on the “Proposals-Discussion” channel.
        </div>
      </div>
      <div className="flex flex-col justify-start mb-10 md:flex-row">
        <Phase phaseNum={3} />
        <div className="font-secondary ml-10 secondary-text-color">
          <span className="primary-text-color">Submission.</span> Once approved on Discord, schedule a live stage meeting to review the proposal. Identify the default quorum, and set a timeline. 
        </div>
      </div>
      <div className="flex flex-col justify-start mb-10 md:flex-row">
        <Phase phaseNum={4} />
        <div className="font-secondary ml-10 secondary-text-color">
          <span className="primary-text-color">Voting.</span> Once approved, your proposal will be posted on ICHI's snapshot by one of the Core Team members. Snapshot: <a href="https://snapshot.org/#/ichi.eth">https://snapshot.org/#/ichi.eth</a>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
