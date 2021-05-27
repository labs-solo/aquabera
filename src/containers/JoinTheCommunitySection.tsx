import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeader from 'common/components/SectionHeader';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
// import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';
import { StyledJoinTheCommunitySection } from './joinTheCommunitySection.style';

const JoinTheCommunitySection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        joinTheCommunitySection {
          header {
            name
            text
            button {
              text
              href
            }
          }
        }
      }
    }
  `);

  const section = Data.ichiJson.joinTheCommunitySection;
  return (
    <StyledJoinTheCommunitySection id="join-the-community" className="join-the-community">
      <Container className="top-waves-bg" width="1440px">
        <StyledFlex justifyContent="center">
          <StyledFlexColumn alignItems="flex-start" justifyContent="center">
            <SectionHeader
              text={section.header.name}
            />
            <SectionHeaderSubText
              text={section.header.text}
              className="mt-20 text-align-left"
            />

            <OutboundLink target="_blank" href={section.header.button.href} className="mt-20">
              <Button
                className="text primary-button button-telegram"
                title={section.header.button.text}
                icon={<img className="icon-telegram" />}
                iconPosition="left"
              />
            </OutboundLink>

            <StyledFlexColumn className="mt-20">
            </StyledFlexColumn>

          </StyledFlexColumn>
          <Image
            className="image-community-bubbles"
            alt="Community"
          />
        </StyledFlex>
      </Container>
    </StyledJoinTheCommunitySection>
  );
};

export default JoinTheCommunitySection;
