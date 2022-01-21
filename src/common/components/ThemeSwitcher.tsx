import Image from 'common/components/Image';
import React from 'react';
import { StyledThemeIcon, StyledThemeSwitcher } from './themeSwitcher.style';

export type ThemeSwitcherProps = {
  onClick?: Function;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {

  const onClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <StyledThemeSwitcher>
      <StyledThemeIcon className="ptb-5">
        <Image
          className="icon-theme-switcher"
          alt="Toggle theme"
          onClick={onClick}
        />
      </StyledThemeIcon>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
