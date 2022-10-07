import Image from 'common/components/Image';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import RssFeedSection from './RssFeedSection';
import { media } from 'common/constants/constants';

export type NewsFeed = {
  header: string;
  feed: string;
  url: string;
  rss2json: string;
}
const NewsSection: React.FC = () => {
  const mediumSection: NewsFeed = {
    "header": "Medium",
    "feed": "https://rss.app/feeds/U4NpjiM6qmXcW2pn.xml",
    "url": "https://medium.com/ichifarm",
    "rss2json": "https://api.rss2json.com/v1/api.json?rss_url="
  }

  const twitterSection: NewsFeed = {
    "header": "Twitter",
    "feed": "https://rss.app/feeds/KihovjB78211CK6g.xml",
    "url": "https://twitter.com/ichifoundation",
    "rss2json": "https://api.rss2json.com/v1/api.json?rss_url="
  }

  return (
    <section>
      <SectionHeader 
        text='News' 
      />

      {/* Twitter */}
      <RssFeedSection section={twitterSection} logo="icon-twitter" />

      <div className="mt-10" />
      <div className="font-primary secondary-header-color mb-5">
        Daniel Tal, Network Steward at ICHI - Community Based DeFi | Blockchain Interviews
      </div>

      <div style={{overflow: "hidden"}} className="mb-20 rounded-[20px]">
        <iframe width="100%"  
          src="https://www.youtube.com/embed/if8sj9PCcfU" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe></div>

      <div className="font-primary secondary-header-color mb-5">
        What is ICHI Crypto? Full interview explanation
      </div>

      <div style={{overflow: "hidden"}} className="mb-20 rounded-[20px]">
        <iframe width="100%" 
          src="https://www.youtube.com/embed/Kz6_5VQXC28" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
      </div>

      <div className="font-primary secondary-header-color mb-5">
        Are Branded Dollars The New StableCoins? | DeFi 2.0 with ICHI
      </div>

      <div style={{overflow: "hidden"}} className="mb-20 rounded-[20px]">
        <iframe width="100%" 
          src="https://www.youtube.com/embed/weU5b58LTdI" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
      </div>

      {/* Medium */}
      <RssFeedSection section={mediumSection} logo="icon-medium" />

      <div className="font-primary secondary-header-color mt-20">Media Coverage</div>
      <div className="flex flex-row flex-wrap justify-center md:justify-between">
        {media.map((co) => (
          <div className="flex flex-col items-center w-28" key={co.name}>
            <Image src={`../images/${co.logo}`} alt={co.name} height="70px" margin="40px 0 20px 0" />
            <span className="link-color">{co.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
