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

  // only display major vaults: USDC - 0x683F081DBC729dbD34AbaC708Fa0B390d49F1c39, wBTC - 0x913b7D91e019402233d2f75863133925CE658CD9
  const isMajorVault = (address: string) => {
    return (address === '0x683F081DBC729dbD34AbaC708Fa0B390d49F1c39' || address === '0x913b7D91e019402233d2f75863133925CE658CD9');
  };

  const vault = vaults.filter(v => isMajorVault(v.address))
    .reduce( ( (prev, current) => ((prev.vaultIRR) > (current.vaultIRR)) ? prev : current), 
    { address: '',
      displayName: '',
      vaultIRR: 0,
    }); 

  const maxAPY = parseInt(vault.vaultIRR.toString());
  const displayName = vault.displayName.replace('-ICHI', ' Vault');
  const bannerMessage = maxAPY 
    ? `The ${displayName} has earned ${maxAPY}% IRR since inception. Click to supply ${displayName.replace(' Vault', '')}`
    : "Click here to deposit into an ICHI Angel Vault"; 

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
