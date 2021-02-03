import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Dropdown, Menu } from 'semantic-ui-react';
import { DrawerContext } from '../../contexts/DrawerContext';


const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
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

  // Bitcoin’s Stablecoin 
  // Link: https://www.ichi.farm/#/mint?wBTC

  // Ethereum’s Stablecoin
  // Link: https://www.ichi.farm/#/mint?eth

  // oneLINK
  // Chainlink’s Stablecoin
  const stablecoinOptions = [
    { 
      key: 1,
      text: 'oneBTC',
      value: 1,
      content: (
        <a target="_blank" rel="noreferrer" href="https://www.ichi.farm/#/mint?wBTC">Bitcoin (oneBTC)</a>
      )
    },
    { 
      key: 2,
      text: 'oneETH',
      value: 2,
      content: (
        <a target="_blank" rel="noreferrer" href="https://www.ichi.farm/#/mint?eth">Ethereum (oneETH)</a>
      )
    },
    { 
      key: 3,
      text: 'oneLINK',
      value: 3,
      content: (
        <a target="_blank" rel="noreferrer" href="https://www.ichi.farm/#/mint?link">Chainlink (oneLINK)</a>
      )
    },
    { 
      key: 4,
      text: 'oneWING',
      value: 4,
      content: (
        <a target="_blank" rel="noreferrer" href="https://www.ichi.farm/#/mint?pwing">Wing (oneWING)</a>
      )
    },
  ];

  const developerOptions = [
    { 
      key: 1, 
      text: 'Documentation', 
      value: 1, 
      content: (
        <a target="_blank" rel="noreferrer" href="https://docs.ichi.farm/">Documentation</a>
      )
    },
    { 
      key: 2,
      text: 'Github', 
      value: 2,
      content: (
          <a target="_blank" rel="noreferrer" href="https://github.com/ichifarm">Github</a>
      ) 
    },
    { 
      key: 3, 
      text: 'Audit', 
      value: 3,
      content: (
          <a target="_blank" rel="noreferrer" href="https://docs.ichi.farm/introduction/audits">Audit</a>
      ) 
    },
    { 
      key: 4, 
      text: 'Bug Bounty', 
      value: 4,
      content: (
          <a target="_blank" rel="noreferrer" href="https://medium.com/ichifarm/ichi-farm-bug-bounties-d3a042e8088a">Bug Bounty</a>
      ) 
    },
  ];

  const governanceOptions = [
    { 
      key: 1, 
      text: 'ICHI Token', 
      value: 1,
      content: (
          <a target="_blank" rel="noreferrer" href="https://docs.ichi.farm/introduction/ichi-tokenomics">ICHI Token</a>
      ) 
    },
    { 
      key: 2, 
      text: 'Stablecoin Treasuries', 
      value: 2,
      content: (
          <a target="_blank" rel="noreferrer" href="https://www.ichi.farm/#/treasury">Stablecoin Treasuries</a>
      ) 
    },
    { 
      key: 3, 
      text: 'Forum', 
      value: 3,
      content: (
          <a target="_blank" rel="noreferrer" href="https://docs.ichi.farm/introduction/ichi-tokenomics">Forum</a>
      ) 
    },
    { 
      key: 4, 
      text: 'Vote', 
      value: 4,
      content: (
          <a target="_blank" rel="noreferrer" href="https://snapshot.page/#/ichi.eth">Vote</a>
      ) 
    },
  ];

  const communityOptions = [
    { 
      key: 1, 
      text: 'Telegram', 
      value: 1,
      content: (
          <a target="_blank" rel="noreferrer" href="https://t.me/ichifarm">Telegram</a>
      ) 
    },
    { 
      key: 2, 
      text: 'Discord', 
      value: 2,
      content: (
          <a target="_blank" rel="noreferrer" href="https://discord.com/invite/Bm6pUHjHUC">Discord</a>
      ) 
    },
    { 
      key: 3, 
      text: 'Twitter', 
      value: 3,
      content: (
          <a target="_blank" rel="noreferrer" href="https://twitter.com/ichifarm">Twitter</a>
      ) 
    },
    { 
      key: 4, 
      text: 'Medium', 
      value: 4,
      content: (
          <a target="_blank" rel="noreferrer" href="https://medium.com/ichifarm">Medium</a>
      ) 
    },
  ];

  const semanticMenuStyles = {
    'border': 'none',
    'box-shadow': 'none'
  };
  const semanticDropdownStyles = {
    'color': '#00BD7B',
    'font-size': '16px',
    'font-weight': '400',
    'padding': '0px',
    'padding-bottom': '14px',
    // This is a gross approximation until I can figure out the flex container
    'margin-top': '7px'
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      <li>
        <Menu compact style={semanticMenuStyles}>
          <Dropdown 
            text='Stablecoins' 
            options={stablecoinOptions} 
            style={semanticDropdownStyles} simple item 
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles}>
          <Dropdown 
            text='Developers' 
            options={developerOptions}
            style={semanticDropdownStyles} simple item 
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles}>
          <Dropdown 
            text='Governance' 
            options={governanceOptions} 
            style={semanticDropdownStyles} simple item 
          />
        </Menu>
      </li>
      <li>
        <Menu compact style={semanticMenuStyles}>
          <Dropdown 
            text='Community' 
            options={communityOptions} 
            style={semanticDropdownStyles} simple item 
          />
        </Menu>
      </li>
      {menuItems.map((menu, index) => (
        <li key={`menu-item-${index}`}>
          {menu.staticLink ? (
            <a href={menu.path}>{menu.label}</a>
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
