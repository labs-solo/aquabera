import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import Image from 'common/components/Image';

type Props = {
  title: string;
  description?: string;
  width?: string;
  titleFontSize?: string;
  url?: string;
  urlIcon?: boolean; // does it show the url icon next to the title
  imageSrc?: string;
  imageHeight?: string;
  imageMargin?: string;
  imageClassName?: string;
}

const HorizontalCard: React.FC<Props> = (props) => {
  const widthClassName = props.width ? `w-[${props.width}] max-w-full` : 'w-full md:w-[49%]'; 

  const innerCard = (
    <div className="flex flex-row w-full items-center">
      {(props.imageSrc || props.imageClassName) && (
        <Image 
          src={props.imageSrc}
          className={props.imageClassName} 
          alt={props.title} 
          marginRight={props.imageMargin}
          height={props.imageHeight} />
      )}          
      <div className="flex flex-col">
        <div className="secondary-header-color font-secondary-title">
          {props.title}
          {props.urlIcon && (
            <Image  className="angled-arrow" alt="Link" padding="0 0 0 12px" height="16px" />
          )}
        </div>
        {props.description && (
          <div className="secondary-text-color font-secondary">{props.description}</div>
        )}
      </div>
    </div>
  )

  return (
    <>
      {props.url ? (
        <div className={`secondary-bg-color flex flex-row rounded-[20px] items-center p-5 mb-5 ${widthClassName}`}>
          <OutboundLink href={props.url} target="blank">
            {innerCard}
          </OutboundLink>
        </div>
      ) : (
        <div className={`secondary-bg-color flex flex-row rounded-[20px] items-center p-5 mb-5 ${widthClassName}`}>
          {innerCard}
        </div>
      )}
    </>
  )
};

export default HorizontalCard;

