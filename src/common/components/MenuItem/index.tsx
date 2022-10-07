import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  title: string;
  link: string;
  className?: string;
}

const MenuItem: React.FC<Props> = (props) => {
  const linkElement = props.link.includes('https://') 
    ? (<OutboundLink href={props.link}>{props.title}</OutboundLink>)
    : (<Link to={props.link}>{props.title}</Link>);

  return (
    <div className={`header-link-color hidden lg:block ml-5 ${props.className}`}>
      {linkElement}
    </div>
  )
};

export default MenuItem;

