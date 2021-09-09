import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import Button from 'common/components/Button';
import { StyledNewsCard } from './newsCard.style';
import Image from '../Image';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledFlexColumn } from 'common/styles/common.styles';

type Post = {
    thumbnail: string;
    title: string;
    link: string;
    exerpt: string;
    author: string;
    date: Date;
}

type Props = {
    post: Post;
}
  
const NewsCard: React.FC<Props> = (props) => {
    return(
        <StyledNewsCard>
            <Image src={props.post.thumbnail} alt={props.post.author} height="60px" className="source" />
            <div>
                <div className="one-token-description primary-text-color">{props.post.date.toLocaleDateString()}</div>
                <div className="one-token-name primary-text-color">
                    {props.post.title}
                </div>
            </div>
            <OutboundLink target="_blank" href={props.post.link} className="btn-read-more">
                <Button className="primary-button text mt-20" title="Read More" />
            </OutboundLink>
        </StyledNewsCard>
    )
}

export default NewsCard;
