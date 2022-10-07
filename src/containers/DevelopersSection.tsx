import Image from 'common/components/Image';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import HorizontalCard from 'common/components/HorizontalCard';


const DevelopersSection: React.FC = () => {

  return (
    <section>
      <SectionHeader 
        text='Developers' 
      />
      <div className="relative">
        <Image src="../images/developers-hero.png" alt="Developers" width="100%" />
        <div 
          className="font-primary secondary-color relative md:absolute bottom-0 left-0 md:bottom-10 md:left-10 pt-5 md:pt-0" >
          Learn about the ICHI Protocol through our documentation
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        <HorizontalCard 
          title="Github"
          url="https://github.com/ichifarm"
          urlIcon={true}
          imageClassName="image-github" 
          imageMargin="20px" 
          imageHeight="40px"
        />
        <HorizontalCard 
          title="Audits"
          url="https://github.com/ichifarm/ichi-oneToken/blob/master/audits/quantstamp/audit.pdf"
          urlIcon={true}
          imageClassName="ichi-black-white" 
          imageMargin="20px" 
          imageHeight="40px"
        />
      </div>

      <hr />

      <div className="flex flex-col lg:flex-row justify-between mt-15">
        <Image src="../images/bounty-man.png" alt="Bug Bounty Program" width="100%" marginRight="40px" />
        <div className="flex flex-col right_column">
          <SectionHeader 
            text='Bug Bounty Program' 
          />
          <div className="font-primary primary-text-color mb-8">
            ICHI prioritizes protocol security - we have partnered with both Immunefi and Hats.finance to ensure white-hat hackers help us keep our platform and community safe
          </div>
          <HorizontalCard 
            title="Immunefi"
            url="https://immunefi.com/bounty/ichi/"
            urlIcon={true}
            width="300px"
          />
          <HorizontalCard 
            title="Hats"
            url="https://app.hats.finance/vaults"
            urlIcon={true}
            width="300px"
          />
        </div>
      </div>

    </section>
  );
};

export default DevelopersSection;
