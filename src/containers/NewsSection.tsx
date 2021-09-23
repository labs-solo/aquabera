import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Container from 'common/components/UI/Container';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import React from 'react';
import SectionHeader from 'common/components/SectionHeader';;
import { StyledNewsSection } from './newsSection.style';
import NewsCard from 'common/components/News/NewsCard';
import {mediaPosts} from 'common/data/ichi'


const NewsSection: React.FC = () => {

  return (
    <StyledNewsSection>
      <Container>
        <SectionHeader 
          text='In the News' 
        />
        <StyledFlex flexWrap="wrap" className="mt-40 mb-20">
          {mediaPosts.map((post) => (
            <NewsCard post={post} key={post.id}/>
          ))}  
        </StyledFlex>
      </Container>
    </StyledNewsSection>
  );
};

export default NewsSection;
