import React, {Component, useState} from 'react';
// import Parser from 'rss-parser';
import Button from 'common/components/Button';
import Card from './Card';
import './Card.css';
import Container from 'common/components/UI/Container';
import SectionHeader from 'common/components/SectionHeader';
import { navigate } from 'gatsby';
// import RSSfeed from 'common/data/ichi/index.js';

class Widget extends React.Component {
    feedURL;

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            active: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
        navigate(this.props.data.url);
        console.log("--- "+this.props.data.url)
    }
    

    componentDidMount() {
        // fetch(urlForFeedToJson(this.props.mediumRSSFeedLink))
        fetch(this.props.data.rss2json + this.props.data.feed)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error("Network request failed")
                }        
                return response
            })
            .then(data => data.json())
            .then(data => {   
                const dataItems = data.items
                // const mediumPosts = dataItems.filter(item => item.categories.length > 0)
                const mediumPosts = dataItems.filter(item => !item.title.includes("Weekly Review")  )
                console.log(mediumPosts);
                this.setState({
                    mediumPosts: mediumPosts,
                }) 
            }, 
            () => {
                this.setState({
                    requestFailed: true,
                })
            })
    }
    
    render() {
        if (this.state.requestFailed) return <div className="container"><p className="ml-4">Oops! Sorry we couldn't load your medium articles</p></div>
        if (!this.state.mediumPosts) return <div className="container"><p className="ml-4">Loading articles from my medium feed ...</p></div>
        
        const mediumPosts = this.state.mediumPosts
        const posts = mediumPosts.length > 3 ? mediumPosts.slice(0, 3) : mediumPosts;
        // const posts = mediumPosts;
        
        const cardCarousels = posts.map((post, index) => 
          <div className={this.state.active === index ? 'carousel-item col-12 col-sm-12 col-md-6 col-lg-4 active' : 'carousel-item col-12 col-sm-12 col-md-6 col-lg-4'} key={index}> 
            <Card post={post} />
          </div>
        ) 
        
        return(
            <>
                <hr />
                <SectionHeader
                    text={this.props.data.header}
                />
                <div id="postsCardCarousels" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner row w-100 mx-auto" role="listbox">
                        {cardCarousels}
                    </div>
                </div>
                <div className="clear text-align-center">
                    <Button className="text primary-button" title="View All" onClick={this.handleClick} />
                </div>
            </>
        )
    }        
}
export default Widget;