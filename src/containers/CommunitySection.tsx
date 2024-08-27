import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import HorizontalCard from 'common/components/HorizontalCard';


const CommunitySection: React.FC = () => {

  return (
     <section className="flex flex-grow">
      <SectionHeader 
        text='Community - coming soon!' 
      />
      {/* <div className="mt-5 mb-5 primary-text-color font-primary max-w-[800px]">
        ICHI’s greedy liquidity favors depositors who want to grow a specific token. It works by resisting the bots that drain value from two-token approaches. Ready to get started? Just deposit a single token. DM ICHI on Twitter, Telegram, or Discord if your favorite token isn’t yet available.
      </div>

      <hr />

      <div className="mt-5 mb-10 secondary-header-color font-secondary-title">
        Join the Conversation
      </div>
      <div className="flex flex-row flex-wrap justify-between">
      <HorizontalCard 
          title="Discord"
          url="https://discord.gg/cxPGjGTy8V"
          imageSrc="../images/discord.svg" 
          imageMargin="20px" 
          imageHeight="50"
          description="Ask questions and engage with the ICHI community"
        />
        <HorizontalCard 
          title="Governance Forum"
          url="https://snapshot.org/#/ichi.eth"
          imageSrc="../images/governance.svg" 
          imageMargin="20px" 
          imageHeight="50"
          description="Participate in ICHI governance"
        />
        <HorizontalCard 
          title="Telegram"
          url="https://t.me/ichifarm"
          imageSrc="../images/telegram.svg" 
          imageMargin="20px" 
          imageHeight="50"
          description="Share ideas and contribute to wide-ranging discussions"
        />
        <HorizontalCard 
          title="Twitter"
          url="https://twitter.com/ichifoundation"
          imageSrc="../images/twitter.svg" 
          imageMargin="20px" 
          imageHeight="50"
          description="Follow the latest news from ICHI"
        />
      </div> */}

      {/* <hr /> */}
      {/* Temporarily removed

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
      </StyledParagraph> */}
    </section>
  );
};

export default CommunitySection;
