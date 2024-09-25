import Button from "common/components/Button";
import Image from "common/components/Image";
import { AquaberaJson } from "common/models/aquaberaJson";
import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";

const MainSection: React.FC = () => {
  const Data = useStaticQuery<AquaberaJson>(graphql`
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

  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="main-section"
    >
      <h1 className="px-3 mx-auto text-center">Make $BGT rain on autopilot</h1>
      <div className="font-secondary mt-5 text-center">
        Liquidity management protocol that maximizes your returns while minimizing risks without requiring constant oversight.
      </div>
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
            className="text primary-button px-6 mb-3"
            title={section.header.button.text}
          />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          href={section.header.button2.href}
          className="btn-link w-full md:w-[250px]"
        >

          <Button
            className="text ghost-button w-full md:w-[250px] mb-3"
            title={section.header.button2.text}
          />
        </OutboundLink>
      </div>
    </div>
  );
};

export default MainSection;
