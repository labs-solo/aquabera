import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import Button from 'common/components/Button';
import { StyledNewsCard, StyledNewsCardBody, StyledNewsCardHeader, StyledNewsTitle } from './newsCard.style';
import Image from '../Image';
import { truncateString } from '../../../utils/inputUtils';

type Post = {
    thumbnail: string;
    title: string;
    link: string;
    exerpt: string;
    author: string;
    date: Date;
    action: string;
}

type Props = {
    post: Post;
}
const NewsCard: React.FC<Props> = (props) => {
    return(
        <StyledNewsCard>
            <StyledNewsCardHeader>
                <Image src={props.post.thumbnail} alt={props.post.author} />
            </StyledNewsCardHeader>
            <StyledNewsCardBody>
                <StyledNewsTitle >
                    {truncateString(props.post.title, 70)}
                </StyledNewsTitle>
                <div className="news-date">{props.post.date.toLocaleDateString()}</div>
                <OutboundLink target="_blank" href={props.post.link} >
                    <Button className="small-button text" title={props.post.action ? props.post.action : "Read more"} />
                </OutboundLink>
            </StyledNewsCardBody>
        </StyledNewsCard>
    )
}

export default NewsCard;
