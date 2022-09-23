import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';
import { StyledMainSection } from './mainSection.style';

const MainSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        mainSection {
          header {
            name
            text
            button {
              text
              href
            }
            button2 {
              text
              href
            }
          }
        }
      }
    }
  `);

  const section = Data.ichiJson.mainSection;
  const hodlVaultDepositLink = "https://app.ichi.org/";
  return (
    <StyledMainSection id="main-section" className="">
      <StyledFlex justifyContent="center">
        <StyledFlexColumn alignItems="center" justifyContent="center" className="inner">
          <h1>{section.header.name}</h1>
          <SectionHeaderSubText
            text={section.header.text}
            className="mt-20 text-align-left"
            textAlign="center"
          />
          <Image src="../images/gate_hero.png" alt="HODL Vault" />
          <StyledFlex justifyContent="space-between" className="buttons">
            <OutboundLink target="_blank" href={hodlVaultDepositLink} className="btn-link">
              <Button
                className="text primary-button"
                title={section.header.button.text}
              />
            </OutboundLink>
            <OutboundLink target="_blank" href={section.header.button2.href} className="btn-link">
              <Button
                className="text secondary-button"
                title={section.header.button2.text}
              />
            </OutboundLink>
          </StyledFlex>
        </StyledFlexColumn>
      </StyledFlex>
    </StyledMainSection>
  );
};

export default MainSection;
