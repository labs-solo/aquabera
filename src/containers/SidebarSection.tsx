import Image from 'common/components/Image';
import React from 'react';
import { ProSidebar, SidebarHeader, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'gatsby';
import { navMenu } from 'common/constants/constants';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type Props = {
    sidebarClassName: string;
    showSidebar: Function;
}

const SidebarSection: React.FC<Props> = (props) => {
  return (
    <ProSidebar className={props.sidebarClassName}>
    <SidebarHeader>
        <Image
            alt="menu"
            className="close-menu-icon"
            onClick={() => props.showSidebar(false)} />
    </SidebarHeader>
    <Menu iconShape="square">
        <MenuItem >
            Home
            <Link to="/" />
        </MenuItem>
        {navMenu.map((i) => (
            <MenuItem key={i.title}>
                {i.title}
                {i.link.includes('http') 
                    ? (<OutboundLink href={i.link} />)
                    : (<Link to={i.link} />)
                }
                
            </MenuItem>
        ))}
    </Menu>
  </ProSidebar>         
);
};

export default SidebarSection;
