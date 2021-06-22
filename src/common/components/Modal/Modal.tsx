import Image from 'common/components/Image';
import { IchiTheme } from 'common/models/theme';
import React from 'react';
import { ThemeContext } from 'styled-components';
import { StyledModal, StyledModalCloseButton, StyledModalHeader, StyledModalOverlay, StyledModalWrapper } from './modal.style';

type Props = {
  isShowing: boolean;
  hide: Function;
};

// Inspired by https://upmostly.com/tutorials/modal-components-react-custom-hooks
const Modal: React.FC<Props> = (props) => {
  const theme = React.useContext<IchiTheme>(ThemeContext);

  if (!props.isShowing) return null;

  const hide = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (props.hide) {
      props.hide();
    }
  };

  return (
    <>
      <StyledModalOverlay />
      <StyledModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <StyledModal className="inner-box-bg-color inner-box-shadow">
          <StyledModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <Image src={theme.icons.close} alt="Toggle Modal" onClick={hide} />
          </StyledModalCloseButton>
          {props.children}
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
};

export default Modal;
