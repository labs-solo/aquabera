import Button from 'common/components/Button';
import Image from 'common/components/Image';
import SectionHeaderSubText from 'common/components/SectionHeaderSubText';
import { IchiJson } from 'common/models/ichiJson';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from 'react';

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
    <div className="flex flex-col items-center justify-center pb-20"  id="main-section">
        <h1>{section.header.name}</h1>
        <SectionHeaderSubText
          text={section.header.text}
          className="mt-20 text-align-left"
          textAlign="center"
        />
        <Image src="../images/gate_hero.png" alt="HODL Vault" margin="40px auto" className="w-[525px]" />
        <div className="flex flex-row justify-between w-[530px]">
          <OutboundLink target="_blank" href={hodlVaultDepositLink} className="btn-link">
            <Button
              className="text primary-button w-[250px]"
              title={section.header.button.text}
            />
          </OutboundLink>
          <OutboundLink target="_blank" href={section.header.button2.href} className="btn-link">
            <Button
              className="text secondary-button w-[250px]"
              title={section.header.button2.text}
            />
          </OutboundLink>
        </div>
    </div>
  );
};

export default MainSection;
