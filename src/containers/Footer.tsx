import Image from 'common/components/Image';
import { navMenu } from 'common/constants/constants';
import { StyledFlex } from 'common/styles/common.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { StyledFooter, CopywriteText, FooterLink, StyledNav } from './footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter className="footer">
      <StyledFlex alignItems="center">
        <Image
          className="image-ichi"
          alt="ICHI"
          height="34px"
          width="auto"
        />
        <CopywriteText className="secondary-text-color">
            &copy; 2022 ICHI. All rights reserved 
        </CopywriteText>
      </StyledFlex>
      <StyledFlex>
        <StyledNav className="primary-text-color">
          {navMenu.map((i) => (
            <FooterLink href={i.link} key={i.title} className="header-link-color">{i.title}</FooterLink>
          ))}

          <OutboundLink href="https://discord.gg/cxPGjGTy8V">
            <Image src="../images/discord.svg" alt="Discord" className="smi-icon" />
          </OutboundLink>
          <OutboundLink href="https://t.me/ichifarm">
            <Image src="../images/telegram.svg" alt="Telegram" className="smi-icon" />
          </OutboundLink>
          <OutboundLink href="https://twitter.com/ichifoundation">
            <Image src="../images/twitter.svg" alt="Twitter" className="smi-icon" />
          </OutboundLink>
          <OutboundLink href="https://www.defipulse.com/">
            <Image src="../images/DeFi-Pulse.svg" alt="DeFi Pulse" className="smi-icon" />
          </OutboundLink>
          <OutboundLink href="https://medium.com/ichifarm">
            <Image src="../images/medium-light.png" alt="Medium" className="smi-icon" />
          </OutboundLink>
        </StyledNav>
      </StyledFlex>
    </StyledFooter>
  );
};

export default Footer;
