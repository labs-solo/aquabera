import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import ThemeSwitcher from 'common/components/ThemeSwitcher';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import NavContainer from 'common/components/UI/NavContainer';


export const communityOptions = [
  {
    key: 1,
    text: 'Telegram',
    value: 1,
    content: (
        <OutboundLink target="_blank" href="https://t.me/ichifarm">Telegram</OutboundLink>
    ),
    url: 'https://t.me/ichifarm',
    target: 'blank'
  },
  {
    key: 2,
    text: 'Discord',
    value: 2,
    content: (
        <OutboundLink target="_blank" href="https://discord.gg/cxPGjGTy8V">Discord</OutboundLink>
    ),
    url: 'https://discord.gg/cxPGjGTy8V',
    target: 'blank'
  },
  {
    key: 3,
    text: 'Twitter',
    value: 3,
    content: (
        <OutboundLink target="_blank" href="https://twitter.com/ichifoundation">Twitter</OutboundLink>
    ),
    url: 'https://twitter.com/ichifoundation',
    target: 'blank'
  }
];

export const newsOptions = [
  {
    key: 1,
    text: 'Medium',
    value: 1,
    content: (
        <OutboundLink target="_blank" href="https://medium.com/ichifarm">Medium</OutboundLink>
    ),
    url: 'https://medium.com/ichifarm',
    target: 'blank'
  },
  {
    key: 2,
    text: 'In the News',
    value: 2,
    content: (
        <Link href="/news/">In the News</Link>
    ),
    url: '/news/',
    target: 'self'
  }
];



type Props = {
  themeToggle: Function;
  themeName: string;
}

const Topnav: React.FC<Props> = (props) => {
  return (
  <Navbar collapseOnSelect expand="lg">
  <NavContainer>

    <Navbar.Brand href="/">                
      <Image
        className="image-ichi-logo main-logo"
        alt="ICHI Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <NavDropdown title="Community" className="collasible-nav-dropdown">
          {communityOptions.map(option => (
            <NavDropdown.Item key={option.key} href={option.url} target={option.target}>{option.text}</NavDropdown.Item>
          ))}
        </NavDropdown>
        <NavDropdown title="News & Media" className="collasible-nav-dropdown">
          {newsOptions.map(option => (
            <NavDropdown.Item key={option.key} href={option.url} data-target={option.target} target={option.target}>{option.text}</NavDropdown.Item>
          ))}
        </NavDropdown>
        {(props.themeName === 'light') ? (
          <Nav.Link onClick={() => props.themeToggle()} className="nav-item theme-switcher" id="navitem">
            Dark Theme
          </Nav.Link>
        ) : (
          <Nav.Link onClick={() => props.themeToggle()} className="nav-item theme-switcher" id="navitem">Light Theme</Nav.Link>
        )}
        <div className="theme-switcher-icon"><ThemeSwitcher onClick={props.themeToggle} /></div>

        <OutboundLink target="_blank" href="https://app.ichi.org" >
          <Button className="text primary-button" title="Launch App" />
        </OutboundLink>
      </Nav>
    </Navbar.Collapse>
  </NavContainer>
</Navbar>)     
};

export default Topnav;
