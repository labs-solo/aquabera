import SectionHeader from 'common/components/SectionHeader';
import React from 'react';

const ThankYouSection: React.FC = () => {

  return (
    <>
      <img 
        src="../images/thank-you.jpg" 
        alt="Thank you!" 
        className="w-full md:w-[49%] float-none mr-0 md:float-left md:mr-10 rounded-[20px]" />
      <SectionHeader
        text="Thank you!"
      />
      <div className="font-primary primary-text-color">Thank you for your request. We will contact you soon.</div>
    </>
  );
};

export default ThankYouSection;
