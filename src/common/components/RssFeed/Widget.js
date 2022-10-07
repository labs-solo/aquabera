import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import './Card.css';
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
            <div className="flex flex-row flex-wrap justify-between card_row">
                {posts.map((post) => (
                    <div 
                        key={post.link} 
                        className="flex flex-col py-8 px-5 news_card secondary-bg-color rounded-[20px] item-center mb-5">
                        <OutboundLink href={post.link} target="blank">
                            <div className="flex flex-row mb-5">
                                <Image marginRight="10px" alt="ICHI" className="ichi-black-white" />
                                <div className="flex flex-col">
                                    <div className="font-primary primary-text-color">
                                        ICHI
                                    </div>
                                    <div className="font-secondary" >
                                        {this.isTwitter && <> @ichifoundation &middot; </>}
                                        {new Date(post.pubDate)
                                            .toLocaleDateString("en-US", {month: 'short', day: 'numeric', year: 'numeric'})}
                                    </div>
                                </div>
                            </div>
                            <div className="text-lg primary-text-color">{post.title}</div>
                        </OutboundLink>
                    </div>
                ))}    
            </div>
        )
    }        
}
export default Widget;