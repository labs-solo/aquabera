import Image from 'common/components/Image';
import { StyledFlex } from 'common/styles/common.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { StyledHeader, HeaderLink, StyledNav } from './headerSection.style';
import Button from 'common/components/Button';
import { navMenu } from 'common/constants/constants';
import ThemeSwitcher from 'common/components/ThemeSwitcher';

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
    <StyledHeader>
      <StyledFlex alignItems="center">
        <a href="/">
          <Image
            className="image-ichi-logo"
            alt="Community"
            height="34px"
            width="auto"
          />
        </a>
      </StyledFlex>
      <StyledFlex justifyContent="flex-end">
        <StyledNav className="primary-text-color">
          {navMenu.map((i) => (
            <HeaderLink href={i.link} key={i.title} className="header-link-color">{i.title}</HeaderLink>
          ))}
          <ThemeSwitcher onClick={props.themeToggle} />
          

          <Image
            className="menu-icon"
            alt="menu"
            onClick={toggleSideBar} />
          <OutboundLink target="_blank" href="https://app.ichi.org" >
            <Button className="primary-button" title="Launch App" />
          </OutboundLink>
        </StyledNav>
      </StyledFlex>
    </StyledHeader>
  );
};

export default HeaderSection;
