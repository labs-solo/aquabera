import Image from 'common/components/Image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { Link } from 'gatsby';
import Button from 'common/components/Button';
import { navMenu } from 'common/constants/constants';
import ThemeSwitcher from 'common/components/ThemeSwitcher';
import MenuItem from 'common/components/MenuItem';

type Props = {
  themeToggle?: Function;
  themeName?: string;
  showSidebar: Function;
}

const HeaderSection: React.FC<Props> = (props) => {
  const toggleSideBar = () => {
    // show sidebar
    props.showSidebar(true);
  }

  return (
    <div className="flex flex-row justify-between items-center h-28 pl-5 pr-5 md:pl-10 md:pr-10 pt-5 pb-5">
      <div className="flex flex-row items-center">
        <Link to="/">
          <Image
            className="image-aquabera-logo"
            alt="AquaBera logo"
            height="44px"
            width="auto"
          />
        </Link>
      </div>

      <div className="flex justify-end items-center">
          <div className="flex mr-10">
          {navMenu.map((i) => (
            <MenuItem key={i.title} link={i.link} title={i.title} className="text-lg font-normal" />
          ))}
          </div>

          <ThemeSwitcher onClick={props.themeToggle} />

          <div className="block lg:hidden">
            <Image
              className="menu-icon"
              alt="menu"
              onClick={toggleSideBar} />
          </div>

          <OutboundLink target="_blank" href="https://app.aquabera.com/explore">
            <Button className="header-button w-32 md:w-40" title="LAUNCH APP" />
          </OutboundLink>
      </div>
    </div>
  );
};

export default HeaderSection;
