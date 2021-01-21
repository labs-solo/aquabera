// import LogoImage from 'common/assets/image/cryptoModern/logo-white.png';
// import LogoImageAlt from 'common/assets/image/cryptoModern/logo.png';
import LogoImage from 'common/assets/image/ichi/192x192_App_Icon.png';
import Button from 'common/components/Button';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import Logo from 'common/components/UIElements/Logo';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Fade from 'react-reveal/Fade';
import Scrollspy from 'react-scrollspy';
import NavbarWrapper, { MenuArea, MobileMenu } from './navbar.style';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { navMenu } = data.cryptoModernJson.navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  // const handleOnChange = (event) => {
  //   setState({
  //     ...state,
  //     search: event.target.value,
  //   });
  // };

  // const handleSearchForm = (event) => {
  //   event.preventDefault();

  //   if (state.search !== '') {
  //     console.log('search data: ', state.search);

  //     setState({
  //       ...state,
  //       search: '',
  //     });
  //   } else {
  //     console.log('Please fill this field.');
  //   }
  // };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/cryptoModern"
          logoSrc={LogoImage}
          title="Crypto Modern"
          className="main-logo"
        />
        {/* <Logo
          href="/cryptoModern"
          logoSrc={LogoImageAlt}
          title="Crypto Modern"
          className="logo-alt"
        /> */}
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          {/* <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search> */}
          {/* end of search */}

          <Link target="_blank" href="https://www.ichi.farm" offset={84}>
            <Button className="trail" title="Launch App" />
          </Link>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title="Try for Free" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
