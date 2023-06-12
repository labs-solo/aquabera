// import CountDown from 'containers/CryptoModern/CountDown';
// import Image from 'common/components/Image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { useQuery } from '@apollo/client';
import { REFRESH_INTERVALS } from 'common/constants/constants';
import { QueryItemsResponse, QueryName } from 'common/models/graphql';
import { MonitorVaults } from 'common/models/farm';
import { listMonitorVaultsQuery } from 'graphql/queries/listMonitorVaults.query';

type Props = {
}

const Banner: React.FC<Props> = (props) => {

  const {
    loading: loadingMonitorVaults,
    error,
    data: dataMonitorVaults
  } = useQuery<QueryItemsResponse<MonitorVaults>>(listMonitorVaultsQuery, {
    fetchPolicy: 'cache-and-network',
    pollInterval: REFRESH_INTERVALS[QueryName.listMonitorVaults]
  });
  const vaults: MonitorVaults[] = dataMonitorVaults?.listMonitorVaults.items || [];

  // only display major vaults: USDC, wBTC, wETH, wStETH, wMATIC, Chainlink
  const isMajorVault = (address: string) => {
    return (
    //   address === '0x4aEF5144131dB95c110af41c8Ec09f46295a7C4B'
    // || address === '0xFc089714519E84B7ce0a4023bfEE0D99F6d767dA'
    // || address === '0x711901e4b9136119Fb047ABe8c43D49339f161c3'
    // || address === '0x3ac9b3db3350A515c702ba19a001d099d4a5F132'
    // || address === '0xDD2521755a8eb05c41C819488D1890e32FeB8753'
    // || address === '0x9C90975B13d04D7d535359887C236ac51f2298cE'
    address === '0x9ff3C1390300918B40714fD464A39699dDd9Fe00'
    || address === '0x692437de2cAe5addd26CCF6650CaD722d914d974'
    );
  };

  const vault = vaults.filter(v => isMajorVault(v.address))
    .reduce( ( (prev, current) => ((prev.vaultIrrAllTx) > (current.vaultIrrAllTx)) ? prev : current), 
    { address: '',
      displayName: '',
      vaultIrrAllTx: 0,
    }); 

  const maxAPY = parseInt(vault.vaultIrrAllTx.toString());
  const displayName = vault.displayName.replace('(polygon)', '');
  const bannerMessage = maxAPY 
    ? `The ${displayName} vault has earned ${maxAPY}% IRR since inception. Click here to deposit`
    : "Click here to deposit into a Vault"; 

  const bannerLink = maxAPY
    ? ( `https://app.ichi.org/vault?address=${vault.address}` )
    : "https://app.ichi.org"

  return (
    <div className="w-full m-auto overflow-hidden" id="home">
      <div 
        className="flex flex-row justify-center items-center pt-1 pb-1 pl-4 pr-4" 
        style={{backgroundImage: 'linear-gradient(to left, #197CFB, #1DAFD9)'}} >

        <OutboundLink href={bannerLink} target="_blank" className="color-white text-center font-semibold">
          {bannerMessage} &rarr;
        </OutboundLink>
      </div>
   </div>        

  );
};

export default Banner;
