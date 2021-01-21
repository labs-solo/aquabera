import bannerImg from 'common/assets/image/cryptoModern/banner-bg.png';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { Link } from 'gatsby';
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
              <Link target="_blank" to="https://docs.ichi.farm/introduction/where-to-get-ichi">
                <Button className="primary" title="GET ICHI" />
              </Link>
              <Link target="_blank" to="https://docs.ichi.farm">
                <Button
                  className="text"
                  variant="textButton"
                  title="READ THE DOCS"
                />
              </Link>
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
