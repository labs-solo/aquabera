import Button from 'common/components/Button';
import Image from 'common/components/Image';
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
      <h1 className='px-3 mx-auto text-center'>Effortless Market Making on <span className='whitespace-nowrap'>Uniswap V3</span></h1>
      <div className="font-secondary mt-5 text-center" >{section.header.text}</div>
      
      <Image src="../images/gate_hero.png" alt="HODL Vault" margin="40px auto" className="w-[525px]" />
      <div className="flex flex-row justify-center md:justify-between w-full md:w-[560px] flex-wrap pl-5 pr-5">
        <OutboundLink target="_blank" href={hodlVaultDepositLink} className="btn-link w-full md:w-[250px]">
          <Button
            className="text primary-button w-full md:w-[250px] mb-3"
            title={section.header.button.text}
          />
        </OutboundLink>
        <OutboundLink target="_blank" href={section.header.button2.href} className="btn-link w-full md:w-[250px]">
          <Button
            className="text secondary-button w-full md:w-[250px] mb-3"
            title={section.header.button2.text}
          />
        </OutboundLink>
      </div>
    </div>
  );
};

export default MainSection;
