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

      <div className='mt-20' />

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
