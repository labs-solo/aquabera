import Image from 'common/components/Image';
import { communityIcons, navMenu } from 'common/constants/constants';
import { Link } from 'gatsby';
import React from 'react';
import SocialMediaIcon from 'common/components/SocialMediaIcon';
import MenuItem from 'common/components/MenuItem';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between pr-5 pl-5 md:pr-10 md:pl-10 mt-10 h-32 footer">
      <div className="flex items-center">
        <Link to="/">
          <Image
            className="image-ichi"
            alt="ICHI"
            height="34px"
            width="auto"
          />
        </Link>
        <div className="pl-5 secondary-text-color text-base">
            &copy; {new Date().getFullYear()} ICHI. All rights reserved 
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-row items-center primary-text-color">
          {navMenu.map((i) => (
            <MenuItem key={i.title} link={i.link} title={i.title} />
          ))}

          {communityIcons.map((i) => (
            <SocialMediaIcon 
              key={i.name}
              url={i.url}
              imageSrc={`../images/${i.logo}`}
              title={i.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
