import Container from 'common/components/UI/Container';
import { IchiJson } from 'common/models/ichiJson';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Widget from 'common/components/RssFeed/Widget.js'

const PartnersSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        rssFeedSection {
          header
          url
          feed
          rss2json
        }
      }
    }
  `);

  const section = Data.ichiJson.rssFeedSection;
  return (
    <Container>
      <Widget data={section}></Widget>
    </Container>
  );
};

export default PartnersSection;
