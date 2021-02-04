import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
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

const endpoint = 'https://api.etherscan.io/api?module=block&action=getblockcountdown&blockno=11908500&apikey=PFGWRD38DM8BB6TYHZ45ZVNNPI84BM13WT';
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
  console.log(`Estimated time in seconds: ${estimatedTimeInSec}, data: ${data}, data: ${JSON.stringify(data, null, ' ')}`)
  const deadline = new Date(Date.parse(new Date()) + estimatedTimeInSec);

  if (error) {
    console.error(`Could not fetch countdown: ${error}`);
    return null;
  }

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="Ichi Halving Countdown" />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          {/* <Button className="primary" title="PRE-ORDER NOW" /> */}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};