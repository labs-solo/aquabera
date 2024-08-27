import Button from "common/components/Button";
import Image from "common/components/Image";
import { IchiJson } from "common/models/ichiJson";
import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";

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
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="main-section"
    >
      <h1 className="px-3 mx-auto text-center">Maximize $BGT Earnings</h1>
      <div className="font-secondary mt-5 text-center">
        Automate and optimize participation in Berachain's Proof-of-Liquidity
      </div>
      <OutboundLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeVKToHTP1AjIbyE3TglLcQLuPGM5jgArkvQN-jNs1KL5Wfrw/viewform?usp=sf_link">
      <div className='border-2 border-[#287884] text-md font-bold text-[#287884] bg-transparent rounded-xl px-6 py-2 mt-8 flex justify-center items-center hover:bg-[#287884] hover:text-white transition-colors duration-100'>
        Register as a Founding Partner
      </div>

      </OutboundLink>
      <Image
        src="../images/aquaberaHero.jpg"
        alt="HODL Vault"
        margin="40px auto"
        className="w-[520px] rounded-lg"
      />
      <div className="flex flex-row justify-center md:justify-between w-full md:w-[560px] flex-wrap pl-5 pr-5">
        <OutboundLink
          target="_blank"
          href="https://forms.gle/BW5HByzZAi72DrRF8"
          className="btn-link w-full md:w-[250px]"
        >
          <Button
            className="text primary-button w-full md:w-[250px] mb-3"
            title={section.header.button.text}
          />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          href={section.header.button2.href}
          className="btn-link w-full md:w-[250px]"
        >
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
