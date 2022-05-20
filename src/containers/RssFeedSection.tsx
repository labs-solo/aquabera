import Image from 'common/components/Image';
import React from 'react';
import Widget from 'common/components/RssFeed/Widget.js'
import {NewsFeed} from './NewsSection';
import { StyledFlex, StyledParagraph, StyledSubText } from 'common/styles/common.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type Props = {
  section: NewsFeed;
  logo: string;
}

const PartnersSection: React.FC<Props> = (props) => {
  return (
    <>
      <StyledFlex justifyContent="space-between" alignItems="center" className="mb-20">
        <StyledFlex alignItems="center">
          <Image className={props.logo} alt={props.section.header} height="60px" />
          <StyledParagraph className="secondary-header-color ml-20">{props.section.header}</StyledParagraph>
        </StyledFlex>
        <OutboundLink href={props.section.url} target="blank">
          <StyledSubText className="primary-text-color">Read More</StyledSubText>
        </OutboundLink>
      </StyledFlex>
      <Widget data={props.section} />
    </>
  );
};

export default PartnersSection;
