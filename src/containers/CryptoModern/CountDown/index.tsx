import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Fade from 'react-reveal/Fade';
import SectionWrapper, { ContentWrapper } from './countdown.style';
import NormalClock from './timer';

// type HalvingResponse = {
//   status: String;
//   message: String;
//   result: {
//     CurrentBlock: String; // "11111111"
//     CountdownBlock: String; // "11111111"
//     RemainingBlock: String; // "11111111"
//     EstimateTimeInSec: String; // "11111111.3"
//   }
// }

// https://etherscan.io/apis
const endpoint = 'https://api.etherscan.io/api?module=block&action=getblockcountdown&blockno=12394000&apikey=PFGWRD38DM8BB6TYHZ45ZVNNPI84BM13WT';
const queryClient = new QueryClient();
 export default function CountDownSection() {
   return (
     <QueryClientProvider client={queryClient}>
       <CountDownSectionHelper />
     </QueryClientProvider>
   )
 }
 
const CountDownSectionHelper = () => {

  const { error, data } = useQuery('halvingCountdown', () => fetch(endpoint).then((res) => res.json()));

  // Get the estimated time in seconds * 1000 to get milliseconds, then add that to the date
  const estimatedTimeInSec = !error && data && data.result ? data.result.EstimateTimeInSec * 1000 : 0;
  const deadline = new Date(new Date().valueOf() + estimatedTimeInSec);

  if (error) {
    console.error(`Could not fetch countdown: ${error}`);
    return null;
  }

  return (
    <SectionWrapper>
      <ContentWrapper>
        <a className="countdown-heading" target="_blank" rel="noreferrer" href="https://docs.ichi.farm/liquidity-programs/overview/ichi-reward-halving">
          ICHI Halving Countdown
        </a>
        <Fade up>
          <div className="timerCount">
            <NormalClock countdown={deadline} divider="true" />
          </div>
        </Fade>
      </ContentWrapper>
    </SectionWrapper>
  );
};