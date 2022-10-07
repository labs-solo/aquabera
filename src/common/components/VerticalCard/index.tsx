import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import Image from 'common/components/Image';

type Props = {
  title: string;
  imageClassName: string;
  url?: string;
}

const VerticalCard: React.FC<Props> = (props) => {
  const outterClassName = "secondary-bg-color flex flex-col rounded-[20px] items-center p-0 mb-4 w-full sm:w-[49%] md:w-[32%]";
  const innerCardPadding = "pt-10 pb-10 pl-5 pr-5 md:pt-16 md:pb-16"

  const innerCard = (
    <div className={`flex flex-col w-full h-full items-center p-16 ${innerCardPadding}`}>
      <div className="h-24 flex flex-row justify-center items-center">
        <Image 
          className={props.imageClassName} 
          alt={props.title} 
          maxHeight="96px" 
          maxWidth="200px" />
      </div>
      <div className="font-primary secondary-header-color mt-5 text-center">{props.title}</div>
    </div>
  )

  return (
    <>
      {props.url ? (
        <div className={outterClassName}>
          <OutboundLink href={props.url} target="blank">
            {innerCard}
          </OutboundLink>
        </div>
      ) : (
        <div className={outterClassName}>
          {innerCard}
        </div>
      )}
    </>
  )
};

export default VerticalCard;

