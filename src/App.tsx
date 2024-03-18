import { ethers } from "ethers";
import { useState, useEffect, useCallback, useMemo } from "react";

function App() {
  const [blockNumber, setBlockNumber] = useState<number>();
  const [accounts, setAccounts] = useState([]);
  const provider = useMemo(() => {
    return new ethers.BrowserProvider(window.ethereum);
  }, []);

  const fetchBlockNumber = useCallback(async () => {
    if (provider) {
      try {
        const blockNumber = await provider.getBlockNumber();
        setBlockNumber(blockNumber);
      } catch (err) {
        console.error("Failed to fetch block number");
      }
    }
  }, [provider]);

  const connectWallet = useCallback(
    async (isPageLoad: boolean) => {
      if (window.ethereum) {
        try {
          const account = await window.ethereum.request({
            method: "eth_accounts",
          });
          setAccounts(account);
          if (isPageLoad && account.length === 0) {
            return;
          } else {
            await provider.send("eth_requestAccounts", []);
            fetchBlockNumber();
          }
        } catch (err) {
          console.error("User denied access");
        }
      } else {
        console.error("Non-Ethereum Browser");
      }
    },
    [provider, fetchBlockNumber],
  );

  useEffect(() => {
    connectWallet(true);
  }, [connectWallet]);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-blue-100">
        {accounts.length === 0 ? (
          <button
            className="rounded-lg bg-blue-400 px-10 py-4 text-white hover:bg-blue-500"
            onClick={() => connectWallet(false)}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="rounded-lg bg-green-500 px-10 py-4 text-white"
            onClick={fetchBlockNumber}
          >
            Refresh block number
          </button>
        )}

        <p className="mt-5">{blockNumber}</p>
      </div>
    </>
  );
}

export default App;
