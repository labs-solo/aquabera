import Modal from 'common/components/Modal/Modal';
import Image from 'common/components/Image';
import React from 'react';
import { StyledModalBody, StyledModalBodyRight, PopoverHeaderText, StyledModalBodyLeft, StyledBg, PopoverLink, IchiLogoV2 } from './modalContainer.style';
import Button from 'common/components/Button';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';

type Props = {
  isShowing: boolean;
  toggle: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ModalContainer: React.FC<Props> = (props) => {



  return (
    <Modal isShowing={props.isShowing} hide={props.toggle}>
      <StyledModalBody>
        <StyledModalBodyLeft>
          <StyledBg>
            <Image
              className="image-bg-popover"
              alt="ICHI V2 background"
            />
          </StyledBg>
          <IchiLogoV2>
            <Image
              className="image-logo-v2"
              alt="ICHI V2"
            />
          </IchiLogoV2>
        </StyledModalBodyLeft>
        <StyledModalBodyRight>
          <PopoverHeaderText className="section-header-color">
            Welcome to<br />
            <span>ICHI V2</span>
          </PopoverHeaderText>
          <SectionHeaderSubText text="This application enables you to manage all minting, deposits, farms, and staking for ICHI V2 stablecoins." />
          <OutboundLink target="_blank" href="https://app.ichi.org" width="400px" className="mt-40 mb-40">
            <Button className="primary-button long-button" title="Continue" width="400px" />
          </OutboundLink>
          <PopoverLink>
            <OutboundLink target="_blank" href="https://ichi.farm" className="section-header-color">Enter Legacy App</OutboundLink>
          </PopoverLink>
        </StyledModalBodyRight>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalContainer;
