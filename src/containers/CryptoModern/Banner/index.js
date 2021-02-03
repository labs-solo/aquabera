import bannerImg from 'common/assets/image/ichi/img_ichi_hero.svg';
import ButtonLink from 'common/components/ButtonLink';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import React from 'react';
import Fade from 'react-reveal/Fade';
import BannerWrapper, {
  BannerContent,

  BannerImage,
  ButtonGroup
} from './banner.style';


const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Useable Money for Every Coin"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Support your favorite cryptocurrency by doing real business with its stablecoin" />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <ButtonLink
                href="https://www.ichi.farm"
                className="primary" 
                variant="textButton" 
                title="USE ICHI" 
              />
              <ButtonLink
                href="https://docs.ichi.farm/introduction/where-to-get-ichi"
                className="secondary left-margin-15" 
                title="GET ICHI" 
                onClick={() => console.log(`Clicked GET ICHI`)}
              />
              <ButtonLink
                href="https://docs.ichi.farm"
                className="secondary left-margin-15"
                variant="textButton"
                title="READ THE DOCS"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
