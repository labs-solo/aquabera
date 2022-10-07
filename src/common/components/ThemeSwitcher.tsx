import Image from 'common/components/Image';
import React from 'react';

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
    <div className="ml-0 mr-5 lg:ml-5 lg:mr-10">
      <Image
        className="icon-theme-switcher cursor-pointer"
        alt="Toggle theme"
        onClick={onClick}
      />
    </div>
  );
};

export default ThemeSwitcher;
