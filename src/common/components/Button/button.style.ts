import { lightTheme } from 'common/theme/light/lightTheme';
import styled from 'styled-components';
import { alignItems, boxShadow, variant } from 'styled-system';
import { base } from '../base';
import { buttonStyle, colorStyle, sizeStyle } from '../customVariant';

type StyledButtonProps = {
  width?: string;
};

const ButtonStyle = styled.button<StyledButtonProps>`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // The color here is consistent in html and rehydration
  color: ${lightTheme.colors.white};
  background-color: ${lightTheme.colors.primary};
  min-height: 39px;
  min-width: 85px;
  width: ${(props) => props.width};
  border-radius: 3px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
