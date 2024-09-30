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
      className="relative mx-4 min-h-[650px] flex md:flex-row flex-col pb-20 secondary-bg-color border border-2 border-black rounded-3xl shadow-[12px_12px_0_0_#020202]"
      id="main-section"
    >
      {/* left side div */}
      <div className="flex flex-1 flex-col items-start justify-center md:mx-16 mx-4">
        <h1 className="flex items-start z-10">
          Make $BGT
          <br />
          rain on autopilot
        </h1>
        <div className="font-secondary mt-5 max-w-[430px]">
          Liquidity management protocol that maximizes your returns while
          minimizing risks without requiring constant oversight.
        </div>

        <div className="flex flex-row md:w-[560px] space-x-[40px] mt-10">
          <OutboundLink
            target="_blank"
            href="https://forms.gle/BW5HByzZAi72DrRF8"
            className="btn-link"
          >
            <Button
              className="text primary-button px-6 mb-3"
              title={section.header.button.text}
            />
          </OutboundLink>
          <OutboundLink
            target="_blank"
            href={section.header.button2.href}
            className="btn-link flex items-center h-12"
          >
            <div>{section.header.button2.text}</div>
          </OutboundLink>
        </div>
      </div>
      <Image
        src="../images/aquaberaHoneySmall.png"
        alt="Small dripping honey"
        // margin="40px auto"
        className=" absolute left-[80px] top-[-20px] w-[120px] invisible md:visible"
      />
      {/* right side div */}
      <div className="flex-1">
        {/* absolute flex-1 bottom-[-100px] left-0 right-0 */}
        <Image
          src="../images/aquaberaBear.png"
          alt="Aquabera bear"
          // margin="40px auto"
          className="absolute md:bottom-[-75px] md:w-[400px] w-[300px] bottom-[-50px] right-[0px]"
        />
        <Image
          src="../images/aquaberaHoneyLarge.png"
          alt="Large dripping honey"
          // margin="40px auto"
          className="absolute md:right-[90px] md:top-[-35px] md:w-[400px] right-[30px] top-[-20px] w-[240px]"
        />
      </div>
    </div>
  );
};

export default MainSection;
