import React, { useState, useEffect } from 'react';
import { PartyBid__factory } from '@sdk/factories/PartyBid__factory';
import { useWallet } from '@gimmixorg/use-wallet';
import { providers, utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const IndexPage = () => {
  const { account, provider, connect } = useWallet();

  const [totalContributed, setTotalContributed] = useState('');

  const PartyBid = PartyBid__factory.connect(
    '0x5dcc03d9a613e59db4751d1071dbaf3caedffd30',
    provider
      ? provider.getSigner()
      : new providers.JsonRpcProvider(
          'https://mainnet.infura.io/v3/b95f6330bfdd4f5d8960db9d1d3da676'
        )
  );

  useEffect(() => {
    PartyBid.totalContributedToParty().then(value => {
      setTotalContributed(utils.formatEther(value));
    });
  }, [account, provider]);

  const [contributionAmount, setContributionAmount] = useState('0');
  const [txHash, setTxHash] = useState('');

  const contribute = async () => {
    if (!provider) return;
    const tx = await PartyBid.contribute({
      value: utils.parseEther(contributionAmount)
    });
    setTxHash(tx.hash);
  };

  const submitBid = async () => {
    if (!provider) return;
    const tx = await PartyBid.bid();
    setTxHash(tx.hash);
  };

  const finalize = async () => {
    if (!provider) return;
    const tx = await PartyBid.finalize();
    setTxHash(tx.hash);
  };

  return (
    <div className="index">
      <div className="section">
        {account ? (
          <>Logged in as {account}</>
        ) : (
          <button
            onClick={() =>
              connect({
                providerOptions: {
                  walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                      infuraId: 'b95f6330bfdd4f5d8960db9d1d3da676'
                    }
                  }
                }
              })
            }
          >
            Connect Wallet
          </button>
        )}
      </div>
      <div className="section">
        Total Contributed to Party (by everyone): {totalContributed} ETH
      </div>
      <div className="section">
        Contribute{' '}
        <input
          type="text"
          placeholder="Amount to contribute (in ETH)"
          value={contributionAmount}
          onChange={e => setContributionAmount(e.target.value)}
        />
        <button
          disabled={!account || parseFloat(contributionAmount) == 0}
          onClick={contribute}
        >
          Submit
        </button>
      </div>

      <div className="section">
        Submit Bid (This will submit our bid to Foundation!)
        <button disabled={!account} onClick={submitBid}>
          Submit
        </button>
      </div>

      <div className="section">
        Finalize
        <button disabled={!account} onClick={finalize}>
          Submit
        </button>
      </div>

      {txHash && (
        <div className="section">
          TX Hash: {txHash}
          <br />
          <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
            Open in Etherscan
          </a>
        </div>
      )}

      <div className="section">
        Microcosm #22 by Jen Stark:{' '}
        <a
          href="https://foundation.app/@JenStark_Vault/cosmos/22"
          target="_blank"
        >
          https://foundation.app/@JenStark_Vault/cosmos/22
        </a>{' '}
        <br />
        The deployed PartyBid contract:{' '}
        <a
          href="https://etherscan.io/address/0x5dCc03D9A613E59db4751D1071dBAF3cAEDFFd30"
          target="_blank"
        >
          https://etherscan.io/address/0x5dCc03D9A613E59db4751D1071dBAF3cAEDFFd30
        </a>
        <br />
        Site code{' '}
        <a href="https://github.com/shahruz/defparty" target="_blank">
          https://github.com/shahruz/defparty
        </a>
      </div>
      <style jsx>{`
        .index {
        }
        .section {
          padding: 20px;
          background-color: #f1f1f1;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
