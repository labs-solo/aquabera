import SectionHeader from 'common/components/SectionHeader';
import VerticalCard from 'common/components/VerticalCard';
import { partners } from 'common/constants/constants';
import React from 'react';

const PartnersSection: React.FC = () => {

  return (
    <section>
      <SectionHeader
        text="Partners - coming soon!"
      />
      {/* <div className="flex flex-row justify-between flex-wrap mt-5">
        {partners.map((partner) => (
          <VerticalCard
            key={partner.name}
            title={partner.name}
            url={partner.url}
            imageClassName={partner.logo} />
        ))}
      </div> */}
    </section>
  );
};

export default PartnersSection;
