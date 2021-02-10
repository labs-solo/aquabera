// import FooterImage from 'common/assets/image/hosting/footer-bg.png';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

// #@media (min-width: 576px) {
// #   background-image: url(${FooterImage});
// # }
// # @media (max-width: 990px) {
// #   padding-bottom: 20px;
// # }
const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background-color: ${themeGet('colors.footerBackground')};
  @media (min-width: 576px) {
    /* padding-top: 170px;
    margin-top: -150px; */
    &:before {
      content: '';
      position: absolute;
      width: 104%;
      padding-bottom: 104%;
      border-top-right-radius: 11%;
      top: 14%;
      left: 0;
      pointer-events: none;
      transform: rotate(-6deg);
      @media (max-width: 767px) {
        padding-bottom: 150%;
      }
    }
  }

  .footer_container {
    background-repeat: no-repeat;
    background-position: center 50px;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: ${themeGet('colors.footerItem')};
    font-size: 14px;
    line-height: 25px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
