import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

type Props = {
  title: string;
  url: string;
  imageSrc: string;
}

const SocialMediaIcon: React.FC<Props> = (props) => {

  return (
    <OutboundLink href={props.url}>
      <img 
        src={props.imageSrc}
        className="mb-0 h-9 ml-3 mr-3 md:ml-5 md:mr-0" 
        alt={props.title} />
    </OutboundLink>
  )
};

export default SocialMediaIcon;

