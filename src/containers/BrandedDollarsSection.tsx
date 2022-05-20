import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
import { IchiJson } from 'common/models/ichiJson';
import { StyledFlex, StyledFlexColumn } from 'common/styles/common.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';
import { StyledBrandedDollarsSection } from './brandedDollarsSection.style';

const BrandedDollarsSection: React.FC = () => {
  const Data = useStaticQuery<IchiJson>(graphql`
    query {
      ichiJson {
        brandedDollarsSection {
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

  const section = Data.ichiJson.brandedDollarsSection;
  return (
    <StyledBrandedDollarsSection id="main-section" className="">
      <StyledFlex justifyContent="center">
        <StyledFlexColumn alignItems="center" justifyContent="center">
          <h1>{section.header.name}</h1>
          <SectionHeaderSubText
            text={section.header.text}
            className="mt-20 text-align-left"
            textAlign="center"
          />
          <Image src="../images/branded-dollars2.svg" alt="Branded Dollars" />
          <StyledFlex justifyContent="space-between" className="buttons">
            <OutboundLink target="_blank" href={section.header.button.href} className="btn-link">
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
    </StyledBrandedDollarsSection>
  );
};

export default BrandedDollarsSection;
