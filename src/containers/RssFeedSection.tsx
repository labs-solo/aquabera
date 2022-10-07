import Image from 'common/components/Image';
import React from 'react';
import Widget from 'common/components/RssFeed/Widget.js'
import {NewsFeed} from './NewsSection';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type Props = {
  section: NewsFeed;
  logo: string;
}

const RssFeedSection: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="flex flex-row items-center">
          <Image className={props.logo} alt={props.section.header} height="60px" />
          <div className="font-primary secondary-header-color ml-5">{props.section.header}</div>
        </div>
        <OutboundLink href={props.section.url} target="blank">
          <div className="font-secondary primary-text-color">Read More</div>
        </OutboundLink>
      </div>
      <Widget data={props.section} />
    </>
  );
};

export default RssFeedSection;
