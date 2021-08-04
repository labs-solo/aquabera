import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import './Card.css';

type Post = {
    thumbnail: string;
    title: string;
    link: string;
    content: string;
}

type Props = {
    post: Post;
}
  
const Card: React.FC<Props> = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <OutboundLink href={props.post.link} target="blank">
                    <img src={props.post.thumbnail} className="card-img-top post-thumbnail" alt={props.post.title}></img>
                    <div className="link-color">{props.post.title}</div>
                </OutboundLink>
            </div>
        </div>
    )
}

export default Card;