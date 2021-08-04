import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import './Card.css';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
import { HeaderSubheader } from 'semantic-ui-react';

type Post = {
    thumbnail: string;
    title: string;
    link: string;
    content: string;
}
type Props = {
    post: Post;
}
  

const tagToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
}

const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text;
}

const Card: React.FC<Props> = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <OutboundLink href={props.post.link}>
                    <img src={props.post.thumbnail} className="card-img-top post-thumbnail" alt={props.post.title}></img>
                    <div className="link-color">{props.post.title}</div>
                </OutboundLink>
            </div>
        </div>
    )
}

export default Card;