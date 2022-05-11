import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Dropdown, Menu } from 'semantic-ui-react';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from 'common/components/Link';

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems: string[] = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    const path = item.path.slice(1);
    scrollItems.push(path);
  });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const developerOptions = [
    {
      key: 1,
      text: 'Documentation',
      value: 1,
      content: (
        <OutboundLink target="_blank" href="https://docs.ichi.farm/">Documentation</OutboundLink>
      )
    },
    {
      key: 2,
      text: 'Github',
      value: 2,
      content: (
          <OutboundLink target="_blank" href="https://github.com/ichifarm">Github</OutboundLink>
      )
    },
    {
      key: 3,
      text: 'Audits',
      value: 3,
      content: (
          <OutboundLink target="_blank" href="https://docs.ichi.farm/audits-and-risks/audits">Audits</OutboundLink>
      )
    },
    {
      key: 4,
      text: 'Bug Bounty',
      value: 4,
      content: (
          <OutboundLink target="_blank" href="https://immunefi.com/bounty/ichi/">Bug Bounty</OutboundLink>
      )
    },
  ];

  const governanceOptions = [
    {
      key: 1,
      text: 'ICHI Token',
      value: 1,
      content: (
          <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/ichi-governance">ICHI Token</OutboundLink>
      )
    },
    {
      key: 2,
      text: 'Stablecoin Treasuries',
      value: 2,
      content: (
          <OutboundLink target="_blank" href="https://www.ichi.farm/#/treasury">Stablecoin Treasuries</OutboundLink>
      )
    },
    {
      key: 3,
      text: 'Forum',
      value: 3,
      content: (
          <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/ichi-governance">Forum</OutboundLink>
      )
    },
    {
      key: 4,
      text: 'Vote',
      value: 4,
      content: (
          <OutboundLink target="_blank" href="https://snapshot.page/#/ichi.eth">Vote</OutboundLink>
      )
    },
  ];

  const communityOptions = [
    {
      key: 1,
      text: 'Telegram',
      value: 1,
      content: (
          <OutboundLink target="_blank" href="https://t.me/ichifarm">Telegram</OutboundLink>
      )
    },
    {
      key: 2,
      text: 'Discord',
      value: 2,
      content: (
          <OutboundLink target="_blank" href="https://discord.gg/ZqqEg7s4">Discord</OutboundLink>
      )
    },
    {
      key: 3,
      text: 'Twitter',
      value: 3,
      content: (
          <OutboundLink target="_blank" href="https://twitter.com/ichifoundation">Twitter</OutboundLink>
      )
    }
  ];

  const newsOptions = [
    {
      key: 1,
      text: 'Medium',
      value: 1,
      content: (
          <OutboundLink target="_blank" href="https://medium.com/ichifarm">Medium</OutboundLink>
      )
    },
    {
      key: 2,
      text: 'In the News',
      value: 2,
      content: (
          <Link href="/news/">In the News</Link>
      )
    }
  ];

  const semanticMenuStyles = {
    'border': 'none',
    'boxShadow': 'none'
  };
  const semanticDropdownStyles = {
    'color': '#0676FF',
    'fontSize': '16px',
    'fontWeight': '400',
    'padding': '0px',
    // 'paddingBottom': '14px',
    // This is a gross approximation until I can figure out the flex container
    // 'marginTop': '7px',
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      {/* <li>
        <Menu compact style={semanticMenuStyles}>
          <Dropdown
            text='Stablecoins'
            options={stablecoinOptions}
            style={semanticDropdownStyles} simple item
          />
        </Menu>
      </li> */}
      <li>
        <Menu compact style={semanticMenuStyles} className="bg-color">
          <Dropdown
            text='Developers'
            options={developerOptions}
            style={semanticDropdownStyles} simple item
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles} className="bg-color">
          <Dropdown
            text='Governance'
            options={governanceOptions}
            style={semanticDropdownStyles} simple item
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles} className="bg-color">
          <Dropdown
            text='Community'
            options={communityOptions}
            style={semanticDropdownStyles} simple item
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles} className="bg-color">
          <Dropdown
            text='News & Media'
            options={newsOptions}
            style={semanticDropdownStyles} simple item
          />
        </Menu>
      </li>
      {menuItems.map((menu, index) => (
        <li key={`menu-item-${index}`}>
          {menu.staticLink ? (
            <OutboundLink href={menu.path}>{menu.label}</OutboundLink>
          ) : (
            <>
              {drawerClose ? (
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={toggleDrawer}
                >
                  {menu.label}
                </AnchorLink>
              ) : (
                <AnchorLink href={menu.path} offset={menu.offset}>
                  {menu.label}
                </AnchorLink>
              )}
            </>
          )}
        </li>
      ))}
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};

export default ScrollSpyMenu;
