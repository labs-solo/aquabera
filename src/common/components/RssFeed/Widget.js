import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import './Card.css';
import { StyledFlex, StyledFlexColumn, StyledSecondaryParagraph, StyledParagraph, StyledSubText, StyledVerticalCard } from 'common/styles/common.styles';
import Image from 'common/components/Image';

class Widget extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            active: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
        window.open(this.props.data.url, "_blank");
    }

    componentDidMount() {
        fetch(this.props.data.rss2json + this.props.data.feed)
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }        
                return response
            })
            .then(data => data.json())
            .then(data => {   
                const dataItems = data.items
                const mediumPosts = dataItems.filter(item => !item.title.includes("Week in Review")  )
                this.setState({
                    mediumPosts: mediumPosts,
                }) 
            }, 
            () => {
                this.setState({
                    requestFailed: true,
                })
            })
        this.isTwitter = this.props.data.header === 'Twitter';
    }
    
    render() {
        if (this.state.requestFailed) return <div className="container"><p className="ml-4">Oops! Sorry we couldn't load your medium articles</p></div>
        if (!this.state.mediumPosts) return <div className="container"><p className="ml-4">Loading articles from my medium feed ...</p></div>
        
        const mediumPosts = this.state.mediumPosts.filter((p) => p.title !== "No title");
        const posts = mediumPosts.length > 3 ? mediumPosts.slice(0, 3) : mediumPosts;

        return(
            <StyledFlex flexWrap="wrap" justifyContent="space-between" className="card_row">
                {posts.map((post) => (
                    <StyledVerticalCard padding="30px 20px" key={post.link} className="news_card secondary-bg-color">
                        <OutboundLink href={post.link} target="blank">
                        {/* {this.isTwitter && ( */}
                            {true && (
                                <StyledFlex className="mb-20">
                                    <Image alt="ICHI" className="ichi-black-white mr-20" />
                                    <StyledFlexColumn>
                                        <StyledParagraph>
                                            ICHI
                                        </StyledParagraph>
                                        <StyledSubText >
                                            {this.isTwitter && <> @ichifoundation &middot; </>}
                                            {new Date(post.pubDate)
                                                .toLocaleDateString("en-US", {month: 'short', day: 'numeric', year: 'numeric'})}
                                        </StyledSubText>
                                    </StyledFlexColumn>
                                </StyledFlex>
                            )}
                            {/* {!this.isTwitter && (
                                <img src={post.thumbnail} className="card-img-top post-thumbnail" alt={post.title} />
                            )} */}
                            <StyledSecondaryParagraph className="primary-text-color">{post.title}</StyledSecondaryParagraph>
                        </OutboundLink>
                    </StyledVerticalCard>
                ))}    
            </StyledFlex>
        )
    }        
}
export default Widget;