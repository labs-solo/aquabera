import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';
import { StyledAngelVaultsSection } from './angelVaultsSection.style';

const AngelVaultsSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        angelVaultsSection {
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

  const section = Data.ichiJson.angelVaultsSection;
  return (
    <StyledAngelVaultsSection className="angel-vaults-section">
      <StyledFlex justifyContent="center">
        <StyledFlexColumn alignItems="center" justifyContent="center">
          <h1>{section.header.name}</h1>
          <SectionHeaderSubText
            text={section.header.text}
            className="mt-20  text-align-left"
            textAlign="center"
          />
          <Image src="../images/angel_vault.png" alt="Angel Vault" />
          <StyledFlex justifyContent="space-between" width="530px" className="buttons">
            <OutboundLink target="_blank" href={section.header.button.href} className="btn-link">
              <Button
                className="text primary-button"
                title={section.header.button.text}
                width="250px"
              />
            </OutboundLink>
            <OutboundLink target="_blank" href={section.header.button2.href} className="btn-link">
              <Button
                className="text secondary-button"
                title={section.header.button2.text}
                width="250px"
              />
            </OutboundLink>
          </StyledFlex>
        </StyledFlexColumn>
      </StyledFlex>
    </StyledAngelVaultsSection>
  );
};

export default AngelVaultsSection;
