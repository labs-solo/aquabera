import React from 'react';
import Quotes from 'common/components/QuotesCarousel'
import { StyledQuoteSection } from './quoteCarouselSection.style';

const quotes = [
  { author: 'Corbin Page, Head of Product at ConsenSys Codefi', company: '', image: 'quotes.svg', quote: 'oneFIL can be used as a stable medium of exchange for the Filecoin community. The Filecoin community is powering web3 with decentralized storage, and Ethereum DeFi serves as the financial system for this emerging industry. oneFIL provides a stable way for providers and consumers to exchange web3 storage services while also opening up a new yield generation for FIL and renFIL holders.' },
  { author: 'Erick Pinos, Advisor at Wing', company: '', image: 'quotes.svg', quote: 'Until ICHI, stablecoin farming has had a parasitic effect on lending platforms like Wing, allowing leveraged stablecoin holders to yield farm most of the rewards with little risk. ICHI has disrupted this process, benefiting everyone in the community by creating a stablecoin that locks up more WING the more that it is minted. ICHI aligns the interests and incentives between WING farmers, lenders, borrowers, and holders.' },
  { author: 'Michael Burgess, COO of Ren', company: '', image: 'quotes.svg', quote: 'This partnership is a key step in allowing the fluid movement of liquidity between any blockchain. ICHI’s protocol creates value for any stakeholder within the Bitcoin, Dogecoin, Digibyte or other crypto communities we support by encouraging the adoption and use of these tokens and driving value back to the community in the form of yield.' },
  { author: 'Mark Smargon, CEO of Fuse Network', company: '', image: 'quotes.svg', quote: 'The implementation of ICHI’s protocol will allow Fuse Network to accelerate our mission of putting truly democratized and borderless money into the hands of millions. ICHI’s easy-to-use, decentralized stablecoin factory perfectly complements our existing sandbox of tools to provide any business or community with the tools needed to utilize their own mobile money.' },
  { author: 'Sergej Kunz, Co-founder of 1inch Network', company: '', image: 'quotes.svg', quote: 'The one1INCH stablecoin can grow into an economic game changer. At scale, its treasury can drive value back to 1inch DeFi operations because it is minted and over-collateralized with 1INCH tokens.' }
];

const QuoteCarouselSection: React.FC = () => {
  return (
    <StyledQuoteSection>
      <Quotes 
        quotes={quotes} 
        className="primary-text-color" 
        leftArrowClassName="quote-carousel-left-arrow" 
        rightArrowClassName="quote-carousel-right-arrow" />
    </StyledQuoteSection>
  );
};

export default QuoteCarouselSection;
